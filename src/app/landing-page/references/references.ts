import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/components/userDatabankService/user-databank-service';
import { DividerRightLeftComponent } from '../../shared/components/divider-right-left/divider-right-left';
@Component({
  selector: 'app-references',
  imports: [DividerRightLeftComponent, TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
/**
 * Represents the References class.
 */
export class References {
  userDBS = inject(UserDatabankService);
}
