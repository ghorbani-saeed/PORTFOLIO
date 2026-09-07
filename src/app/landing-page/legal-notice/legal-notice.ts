import { Component, OnInit, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';

/**
 * Displays the legal notice (Impressum) of the portfolio.
 * Fetches required contact and legal information from the PortfolioDataService.
 */
@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice implements OnInit {
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
  private viewportScroller = inject(ViewportScroller);
  private route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.viewportScroller.setOffset([0, 100]);
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
