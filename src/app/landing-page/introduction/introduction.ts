import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-interoduction',
  imports: [ TranslatePipe],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Interoduction {}
