import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/userDatabankService/portfolio-data.service';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Footer component providing access to global portfolio data
 * such as contact details and social media links.
 */
@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
/**
 * Represents the Footer class.
 */
export class Footer {
  /** Reference to the central data service */
  userDBS = inject(PortfolioDataService);
}
