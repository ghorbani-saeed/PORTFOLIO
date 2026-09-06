import { Component, signal ,OnInit, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

/**
 * Root component of the application.
 * Defines the main layout structure including Header, RouterOutlet, and Footer.
*/
@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
// export class App {
//   /** Application title for the portfolio identity */
//   protected readonly title = signal('PORTFOLIO');
// }

export class App implements OnInit {
  /** Application title for the portfolio identity */
  protected readonly title = signal('PORTFOLIO');
  
  private router = inject(Router);

  ngOnInit() {
    const queryParams = new URLSearchParams(window.location.search);
    const path = queryParams.get('p');
    if (path) {
      window.history.replaceState(null, '', path);
      this.router.navigateByUrl(path);
    }
  }
}