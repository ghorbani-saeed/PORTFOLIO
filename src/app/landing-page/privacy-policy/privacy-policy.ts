import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
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

export class PrivacyPolicy {
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
}
