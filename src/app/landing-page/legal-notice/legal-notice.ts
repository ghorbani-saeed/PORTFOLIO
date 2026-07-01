import { Component, inject } from '@angular/core';
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
export class LegalNotice {
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
}
