import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // Hide the spinner after 3 seconds
    }, 3000);
  }
}
