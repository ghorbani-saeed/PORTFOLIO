import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome';
import { Interoduction } from './introduction/introduction';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { ReferencesComponent } from './references/references';
import { FeedbackComponent } from './feedback/feedback';

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
/**
 * Represents the MainPage class.
 */
export class LandingPageComponent {}
