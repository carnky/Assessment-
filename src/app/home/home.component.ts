import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { NavdashboardComponent } from '../navdashboard/navdashboard.component';
import { FooterDasbordComponent } from '../footer-dasbord/footer-dasbord.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavdashboardComponent,FooterDasbordComponent, RouterOutlet,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
