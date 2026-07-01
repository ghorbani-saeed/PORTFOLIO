import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';

/**
 * References component displaying testimonials and feedback from partners.
 * Retrieves content dynamically from the PortfolioDataService.
*/
@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class ReferencesComponent {
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
}
