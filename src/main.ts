import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Restores the initial scroll behavior for first page load.
 */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

/**
 * Bootstraps the Angular root application.
 */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
