import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioDataService } from '../../shared/services/userDatabankService/portfolio-data.service';
@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  userDBS = inject(PortfolioDataService);
}
