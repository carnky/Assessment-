import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navdashboard',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './navdashboard.component.html',
  styleUrls: ['./navdashboard.component.scss']
})
export class NavdashboardComponent {
  menuItems = [
    { title: 'الرئيسية', icon: 'assets/img/gIcon.png', link: '/home'},
    { title: 'التقارير', icon: 'assets/img/rIcon.png', link: '' },
    { title: 'لوحة التحكم', icon: 'assets/img/Le.png', link: '/home/violation'}
  ];

  activeLink = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeLink = event.urlAfterRedirects;
      });
  }

  setActive(link: string) {
    this.activeLink = link;
  }
}
