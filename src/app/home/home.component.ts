import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavdashboardComponent } from '../navdashboard/navdashboard.component';
import { FooterDasbordComponent } from '../footer-dasbord/footer-dasbord.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NavdashboardComponent, FooterDasbordComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  reports = [
    {
      icon: 'assets/img/rIcon.png',
      time: 'منذ 3 ساعات',
      title: 'تقرير',
      id: '113424#',
      link: '#'
    },
    {
      icon: 'assets/img/rIcon.png',
      time: 'منذ 5 ساعات',
      title: 'تقرير آخر',
      id: '113425#',
      link: '#'
    }
    
  ];
}