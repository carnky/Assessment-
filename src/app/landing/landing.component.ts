import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLandingComponent } from '../nav-landing/nav-landing.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavLandingComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  cards = [
    {
      icon: 'assets/img/Icon-about.png',
      subtitle: 'عنوان فرعي 1',
      text: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة.'
    },
    {
      icon: 'assets/img/Icon-about.png',
      subtitle: 'عنوان فرعي 2',
      text: 'لوريم إيبسوم هو نص مؤقت آخر يُستخدم لإظهار كيف يمكن أن يبدو النص في مستند.'
    },

    {
      icon: 'assets/img/Icon-about.png',
      subtitle: 'عنوان فرعي 1',
      text: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة.'
    },
    {
      icon: 'assets/img/Icon-about.png',
      subtitle: 'عنوان فرعي 2',
      text: 'لوريم إيبسوم هو نص مؤقت آخر يُستخدم لإظهار كيف يمكن أن يبدو النص في مستند.'
    }
    
  ];

  contactInfo = [
    {
      icon: 'assets/img/mail-01.png',
      title: 'البريد الالكتروني',
      value: 'help@company.sa'
    },
    {
      icon: 'assets/img/Icontext.png',
      title: 'رسالة قصيرة',
      value: '00000000'
    },
    {
      icon: 'assets/img/Iconcall.png',
      title: ' رقم الجوال',
      value: '00000000'
    },
    

  ];
}

