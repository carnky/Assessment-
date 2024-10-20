import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavdashboardComponent } from '../navdashboard/navdashboard.component';
import { FooterDasbordComponent } from '../footer-dasbord/footer-dasbord.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavdashboardComponent,FooterDasbordComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
