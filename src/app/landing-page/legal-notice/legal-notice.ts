import { Component, OnInit, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
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
export class LegalNotice implements OnInit{
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
  private viewportScroller = inject(ViewportScroller);
  ngOnInit(): void {
    // Setzt einen Offset [x, y], damit beim Fragment-Sprung oben Platz für den Header bleibt (z.B. 100px)
    this.viewportScroller.setOffset([0, 100]); 
  }
}
