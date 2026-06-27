import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../services/userDatabankService/portfolio-data.service';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
/**
 * Represents the Footer class.
 */
export class Footer {
  userDBS = inject(PortfolioDataService);
}
