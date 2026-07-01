import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';

/**
 * Welcome component serving as the initial section of the application.
 * Provides personal introduction and processes profile data for display.
*/
@Component({
  selector: 'app-welcome',
  imports: [TranslatePipe],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class WelcomeComponent {
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
  /**
   * Processes the full name to return a clean, split name string.
   * Filters out empty values to ensure a valid display format.
  */
  get displayName(): string {
    const fullName = this.userDBS.ownerProfile.fullName?.trim() ?? '';
    const [firstName = '', lastName = ''] = fullName.split(/\s+/);
    return [firstName, lastName].filter(Boolean).join(' ');
  }
}
