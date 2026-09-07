import { Component, OnInit, inject, AfterViewInit} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';

/**
 * Displays the privacy policy page.
 * Loads contact and ownership details from the PortfolioDataService to ensure consistent information.
 */
@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy implements OnInit {
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
  private route = inject(ActivatedRoute);
  private currentFragment: string | null = null;

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.currentFragment = fragment;
      this.scrollToFragment();
    });
  }

  ngAfterViewInit(): void {
    this.scrollToFragment();
  }

  private scrollToFragment(): void {
    if (this.currentFragment) {
      setTimeout(() => {
        const element = document.getElementById(this.currentFragment!);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100; // 100px Offset für den Header

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
