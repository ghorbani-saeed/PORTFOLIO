import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page';
import { LegalNotice } from './landing-page/legal-notice/legal-notice';
import { PrivacyPolicy } from './landing-page/privacy-policy/privacy-policy';
/**
 * Application route definitions.
 */
export const routes: Routes = [
  { path: '', component: LandingPageComponent  },
  { path: 'legal-notice', component: LegalNotice },
  { path: 'privacy-policy', component: PrivacyPolicy },
];
