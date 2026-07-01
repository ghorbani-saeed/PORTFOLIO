import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/**
 * Ensures a consistent user experience on page refresh by forcing the browser
 * to manual scroll management and resetting the scroll position to the top.
*/
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

/**
 * Entry point for the application.
 * Bootstraps the root component and manages global startup errors.
*/
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
