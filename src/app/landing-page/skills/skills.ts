import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';

/**
 * Skills component showcasing technical expertise and tools.
 * Retrieves skill definitions dynamically from the PortfolioDataService.
 */
@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
}
