import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';
import { DividerRightLeftComponent } from '../../shared/components/divider-to-right/divider-to-right';
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
  userDBS = inject(PortfolioDataService);
}
