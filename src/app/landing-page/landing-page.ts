import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome';
import { Interoduction } from './introduction/introduction';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { ReferencesComponent } from './references/references';
import { FeedbackComponent } from './feedback/feedback';

/**
 * LandingPage component acting as the main entry point for the application.
 * Assembles all primary sections into a unified portfolio view.
*/
@Component({
  selector: 'app-landing-page',
  imports: [
    WelcomeComponent, 
    Interoduction, 
    Skills, 
    Portfolio,
    ReferencesComponent,
    FeedbackComponent,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})

export class LandingPageComponent {
}
