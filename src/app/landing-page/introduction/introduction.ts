import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Introduction component representing the "Hero" section of the portfolio.
 * Provides the initial visual impact and high-level user navigation.
 */
@Component({
  selector: 'app-interoduction',
  imports: [TranslatePipe],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Interoduction {}