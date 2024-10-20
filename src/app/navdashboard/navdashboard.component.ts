import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navdashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navdashboard.component.html',
  styleUrl: './navdashboard.component.scss'
})
export class NavdashboardComponent {
  menuItems = [
    { title: 'الرئيسية', icon: 'assets/img/gIcon.png', link: '#home' },
    { title: 'التقارير', icon: 'assets/img/rIcon.png', link: '#features' },
    { title: 'لوحة التحكم', icon: 'assets/img/Le.png', link: '#contact' }
  ];

  activeLink = '#home'; 

  setActive(link: string) {
    this.activeLink = link;
  }
}
