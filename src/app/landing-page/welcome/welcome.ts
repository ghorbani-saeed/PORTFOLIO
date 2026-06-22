import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/components/userDatabankService/user-databank-service';

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
  userDBS = inject(UserDatabankService);

  get displayName(): string {
    const fullName = this.userDBS.profileData.fullName?.trim() ?? '';
    const [firstName = '', lastName = ''] = fullName.split(/\s+/);
    return [firstName, lastName].filter(Boolean).join(' ');
  }
}
