import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/components/userDatabankService/user-databank-service';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})

export class Portfolio {
  userDBS = inject(UserDatabankService);

  getCounterLabel(index: number): string {
    return `0${index + 1}/0${this.userDBS.showcaseProjects.length}`;
  }
}