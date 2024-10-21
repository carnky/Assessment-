import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavLandingComponent } from './nav-landing/nav-landing.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavLandingComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-Assessment-app';
  showHeaderFooter: boolean = true;
  subscription = Subscription.EMPTY;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // The router object lives outside this component,
    // any subscriptions associated with it should be
    // cleared at the end of component lifecycle (on destroy)
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentRoute = event.urlAfterRedirects;
        this.showHeaderFooter = !(
          currentRoute.includes('/sign-in') ||
          currentRoute.includes('/forgot-password') ||
          currentRoute.includes('/dashboard')
        );
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
