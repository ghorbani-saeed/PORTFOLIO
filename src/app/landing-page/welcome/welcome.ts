import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';
@Component({
  selector: 'app-welcome',
  imports: [TranslatePipe],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
/**
 * Represents the Hero class.
 */
export class WelcomeComponent {
  userDBS = inject(PortfolioDataService);

  get displayName(): string {
    const fullName = this.userDBS.ownerProfile.fullName?.trim() ?? '';
    const [firstName = '', lastName = ''] = fullName.split(/\s+/);
    return [firstName, lastName].filter(Boolean).join(' ');
  }
}
