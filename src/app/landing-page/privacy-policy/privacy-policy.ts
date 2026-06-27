import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';
@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
/**
 * Represents the PrivacyPolicy class.
 */
export class PrivacyPolicy {
  userDBS = inject(PortfolioDataService);
}
