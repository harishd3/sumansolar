import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // Array of images
  images = [
    'assets/home.jpg',
    'assets/home1.jpg',
    'assets/home2.jpg',
    'assets/home.jpg',
    'assets/home1.jpg',
    'assets/home2.jpg',
    'assets/home.jpg',
    'assets/home1.jpg',
    'assets/home2.jpg',
    'assets/home1.jpg',
    'assets/home2.jpg' // ignored, more than 10
  ];

  constructor() { }

  ngOnInit(): void {
  }
}