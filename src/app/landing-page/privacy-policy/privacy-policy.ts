import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/components/userDatabankService/user-databank-service';

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
  userDBS = inject(UserDatabankService);
}
