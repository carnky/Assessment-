import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavLandingComponent } from './nav-landing/nav-landing.component'; 
import { FooterComponent } from './footer/footer.component';  
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavLandingComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-Assessment-app';
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
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
  
}
