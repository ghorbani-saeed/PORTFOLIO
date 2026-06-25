import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerRightLeftComponent } from '../../shared/components/divider-to-left/divider-to-left';

@Component({
  selector: 'app-interoduction',
  imports: [DividerRightLeftComponent, TranslatePipe],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Interoduction {}
