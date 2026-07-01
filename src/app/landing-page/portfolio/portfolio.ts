import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';

/**
 * Portfolio component displaying a showcase of selected projects.
 * Provides logic to format project counter labels dynamically.
 */
@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  /** Access to the central portfolio data service */
  userDBS = inject(PortfolioDataService);
  /**
   * Generates a formatted string for the project counter (e.g., "01/02").
   * @param index The current project index
   * @returns A formatted label string
  */
  getCounterLabel(index: number): string {
    return `0${index + 1}/0${this.userDBS.featuredWork.length}`;
  }
}
