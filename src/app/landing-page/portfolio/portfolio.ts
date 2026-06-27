import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';
@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  userDBS = inject(PortfolioDataService);

  getCounterLabel(index: number): string {
    return `0${index + 1}/0${this.userDBS.featuredWork.length}`;
  }
}
