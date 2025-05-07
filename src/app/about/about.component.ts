import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about = {
    title: 'About Us',
    heading: '2+ Years Experience In Solar & Renewable Energy Industry',
    description: 'Suman Solar Energies, in collaboration with waaree energies, delivers cutting-edge solar solutions powered by industry-leading technology and decades of experience. This strategic partnership ensures high-quality, efficient, and reliable solar energy systems tailored to residential, commercial, and industrial needs...',
    points: [
      'Free Installation setup',
      'Repair & Maintenance',
      '24/7 customer support'
    ],
    image: 'assets/about.jpg',
  };

  team = [
    {
      name: 'suman dasari',
      designation: 'Founder & CEO',
      image: 'assets/about.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'anjaiah',
      designation: 'CTO',
      image: 'assets/about.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'harish dasari',
      designation: 'Marketing Head',
      image: 'assets/about.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];
}

