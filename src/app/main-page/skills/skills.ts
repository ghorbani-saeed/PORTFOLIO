import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/components/userDatabankService/user-databank-service';
import { DividerRightLeftComponent } from '../../shared/components/divider-left-right/divider-left-right';
@Component({
  selector: 'app-skills',
  imports: [DividerRightLeftComponent, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
/**
 * Represents the Skills class.
 */
export class Skills {
  userDBS = inject(UserDatabankService);
}
