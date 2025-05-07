import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  images = [
    'assets/carousel-1.jpg',
    'assets/carousel-2.jpg',
    'assets/carousel-3.jpg',
    'assets/carousel-2.jpg',
  ];
  

// Define the feature data structure
features = [
  {
    title: 'Happy Customers',
    value: 0,
    icon: 'fa-users',
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit'
  },
  {
    title: 'Project Done',
    value: 0,
    icon: 'fa-check',
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit'
  },
  {
    title: 'Awards Win',
    value: 0,
    icon: 'fa-award',
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit'
  },
  {
    title: 'Expert Workers',
    value: 0,
    icon: 'fa-users-cog',
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit'
  }
];

ngOnInit() {
  // Simulate the dynamic increment effect for each feature
  this.incrementCounters();
}

incrementCounters() {
  this.features.forEach((feature, index) => {
    let counter = 0;
    const targetValue = this.getTargetValue(index);

    const interval = setInterval(() => {
      if (counter < targetValue) {
        counter++;
        feature.value = counter;
      } else {
        clearInterval(interval);
      }
    }, 50); // Increment speed (adjust as needed)
  });
}

getTargetValue(index: number): number {
  // Set target values dynamically based on feature index
  const targetValues = [100, 14, 3, 5];
  return targetValues[index];
}

getDelay(index: number): string {
  // Set delay for each feature based on its index
  const delays = ['0.1s', '0.3s', '0.5s', '0.7s'];
  return delays[index];
}
}