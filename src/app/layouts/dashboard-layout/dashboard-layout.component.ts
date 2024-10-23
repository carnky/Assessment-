import { Component } from '@angular/core';
import { NavdashboardComponent } from '../../navdashboard/navdashboard.component'; 
import { FooterDasbordComponent } from '../../footer-dasbord/footer-dasbord.component'; 
import { CommonModule } from '@angular/common'; 
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, NavdashboardComponent, FooterDasbordComponent, RouterModule, RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
}
