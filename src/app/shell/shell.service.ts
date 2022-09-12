import { Routes, Route } from '@angular/router';

import { HeaderComponent } from './header/header.component';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: HeaderComponent,
      children: routes,

      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }
}
