import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var mapboxgl: any; // إعلان Mapbox للاستخدام

@Component({
  selector: 'app-violation-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './violation-dashboard.component.html',
  styleUrls: ['./violation-dashboard.component.scss']
})
export class ViolationDashboardComponent implements OnInit {

  menuItems: { title: string, icon: string, link: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    // إعداد القائمة الجانبية
    this.menuItems = [
      { title: 'الرئيسية', icon: 'assets/img/home-icon.png', link: '/home' },
      { title: 'التقارير', icon: 'assets/img/reports-icon.png', link: '/dashboard/reports' },
      { title: 'لوحة التحكم', icon: 'assets/img/violation-icon.png', link: '/home/violation' }
    ];

   
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmExNDciLCJhIjoiY20ybGl2dm1sMDU0NTJpczh2c3lmYTkxNiJ9.C6Mryb5AC0boqal-dvrKuw'; 

    const map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/mapbox/streets-v12', 
      center: [46.6753, 24.7136], 
      zoom: 10 
    });


    map.addControl(new mapboxgl.NavigationControl());

    console.log('ViolationDashboardComponent Initialized');
  }
}
