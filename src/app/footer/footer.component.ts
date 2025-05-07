import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  images = [
    'assets/gallery-1.jpg',
    'assets/gallery-3.jpg',
    'assets/gallery-4.jpg',
    'assets/gallery-5.jpg',
  ];

  addressSection = {
    title: 'Address',
    details: [
      { icon: 'fa-map-marker-alt', text: 'Shop No.2, Sidda Vari Complex' },
      { icon: 'fa-phone-alt', text: '+91 9490026969' },
      { icon: 'fa-envelope', text: 'sumansolarenergy@gmail.com' }
    ],
    socialLinks: [
      { icon: 'fab fa-twitter', url: '' },
      { icon: 'fab fa-facebook-f', url: '' },
      { icon: 'fab fa-youtube', url: '' },
      { icon: 'fab fa-linkedin-in', url: '' }
    ]
  };
  

}
