import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/components/userDatabankService/user-databank-service';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})

/**
 * Component managing the contact form section.
 * Handles user inputs, detects the environment, manages state for toast notifications,
 * and ensures proper cleanup of asynchronous timers and DOM styles when the component is destroyed.
 */
export class ContactMe implements OnDestroy {
  /** Injecting the HttpClient for making backend API requests */
  http = inject(HttpClient);

  /** Injecting the central data service for accessing localized or global portfolio data */
  userDBS = inject(UserDatabankService);

  /** Two-way or component-bound reference to the contact form fields */
  formData = this.userDBS.messageModel;

  /** Automatically determines if the app runs locally to toggle test mode for emails */
  mailTest = this.isLocalEnvironment(window.location.hostname);

  /** Backend configuration setting up the API endpoint and the function to format the request body */
  post = {
    endPoint: '/sendMail.php',
    body: (payload: { name: string; email: string; msg: string }) => payload,
  };

  /** Controls whether the toast notification modal is visible in the DOM */
  toastVisible = false;

  /** Stores the current success or error text to be displayed inside the toast */
  toastMessage = '';

  /** Defines the current visual theme/type of the active toast */
  toastType: 'success' | 'error' = 'success';

  /** Reference ID for the running setTimeout timer, used to clear it on early exit or destruction */
  private toastTimerId: ReturnType<typeof setTimeout> | null = null;

  /** Backup reference for the original <body> CSS overflow value to restore scrolling behavior */
  private previousBodyOverflow: string | null = null;

  /** Backup reference for the original <html> CSS overflow value to restore scrolling behavior */
  private previousHtmlOverflow: string | null = null;

  /**
   * Angular Lifecycle Hook.
   * Runs automatically when the component is unloaded. Prevents active timers from
   * running in the background and guarantees that page scrolling is restored.
   */
  ngOnDestroy(): void {
    this.clearToastTimer();
    this.unlockPageScroll();
  }

  /**
   * Checks if the current hostname corresponds to a local development environment or private network.
   * This is used to differentiate between local testing and the live production server.
   * * @param hostname The current window location hostname (e.g., 'localhost' or an IP address)
   * @returns {boolean} True if the environment is local, false if it is live
   */
  private isLocalEnvironment(hostname: string): boolean {
    if (
      hostname === 'localhost' ||
      hostname === '::1' ||
      hostname === '0.0.0.0' ||
      hostname.endsWith('.local')
    ) {
      return true;
    }

    if (
      hostname.startsWith('127.') || // Localhost / Loopback (my own PC)
      hostname.startsWith('192.168.') || // Typical home network (local Wi-Fi)
      hostname.startsWith('10.') || // Private networks used in companies or schools
      hostname.startsWith('172.') // Another private IP range (often used for Docker or VPNs)
    ) {
      return true;
    }
    return false;
  }

  /**
   * Handles the contact form submission.
   * Validates the form, simulates a success response if mailTest is enabled,
   * or sends the actual form data payload to the backend server.
   * * @param ngForm The Angular template-driven form instance
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      if (this.mailTest === true) {
        setTimeout(() => {
          ngForm.resetForm();
          this.showToast('success');
        }, 600);
      } else {
        const payload = {
          name: this.formData.senderName,
          email: this.formData.senderEmail,
          msg: this.formData.textMessage,
        };

        this.http
          .post(this.post.endPoint, this.post.body(payload), {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .subscribe({
            next: (response: any) => {
              if (response && response.ok === true) {
                ngForm.resetForm();
                this.showToast('success');
              } else {
                console.error('Mail send failed');
                this.showToast('error');
              }
            },
            error: (error) => {
              console.error('Mail send failed', error);
              this.showToast('error');
            },
          });
      }
    }
  }

  /**
   * Displays a temporary toast notification (success or error) to the user.
   * Automatically clears any active timers, sets the message, locks page scrolling,
   * and hides the toast after a 3.2-second delay.
   * * @param type The type of toast to display ('success' | 'error')
   */
  private showToast(type: 'success' | 'error'): void {
    this.clearToastTimer();
    this.toastType = type;
    this.toastMessage = type === 'success' ? 'Email sent!' : 'Email-sending failed!';
    this.toastVisible = true;
    this.lockPageScroll();
    this.toastTimerId = setTimeout(() => {
      this.toastVisible = false;
      this.unlockPageScroll();
    }, 3200);
  }

  /**
   * Clears the active toast timeout timer if it exists to prevent memory leaks
   * or overlapping animation issues.
   */
  private clearToastTimer(): void {
    if (this.toastTimerId !== null) {
      clearTimeout(this.toastTimerId);
      this.toastTimerId = null;
    }
  }

  /**
   * Locks the window/page scrolling by setting the CSS overflow property to 'hidden'.
   * Stores the original overflow styles to safely restore them later.
   */
  private lockPageScroll(): void {
    const html = document.documentElement;
    const body = document.body;

    if (this.previousHtmlOverflow === null) {
      this.previousHtmlOverflow = html.style.overflow;
      html.style.overflow = 'hidden';
    }

    if (this.previousBodyOverflow === null) {
      this.previousBodyOverflow = body.style.overflow;
      body.style.overflow = 'hidden';
    }
  }

  /**
   * Restores the original page scrolling behavior by reapplying the previously
   * saved CSS overflow values.
   */
  private unlockPageScroll(): void {
    const html = document.documentElement;
    const body = document.body;

    if (this.previousHtmlOverflow !== null) {
      html.style.overflow = this.previousHtmlOverflow;
      this.previousHtmlOverflow = null;
    }

    if (this.previousBodyOverflow !== null) {
      body.style.overflow = this.previousBodyOverflow;
      this.previousBodyOverflow = null;
    }
  }
}
