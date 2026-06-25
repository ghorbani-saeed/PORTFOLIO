import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/components/userDatabankService/user-databank-service';
import { DividerRightLeftComponent } from '../../shared/components/divider-to-left/divider-to-left';
@Component({
  selector: 'app-references',
  imports: [DividerRightLeftComponent, TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
/**
 * Represents the References class.
 */
export class ReferencesComponent {
  userDBS = inject(UserDatabankService);
}
