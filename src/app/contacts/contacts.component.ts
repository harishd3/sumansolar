import { Component,AfterViewInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// declare const WOW: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('slideInDown', [
      transition(':enter', [
        style({ transform: 'translateY(-50px)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-50px)', opacity: 0 }),
        animate('700ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ContactsComponent {


  heading = 'Contact Us';
  subheading = 'Send Us a Message';
  description = 'Have questions about solar solutions? Reach out to Suman Solar Energies for expert advice.';
  contactForm: FormGroup;
  googleMapUrl: SafeResourceUrl;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.googleMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.19669952395367!2d79.87173638930545!3d15.58378265229551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ae36647bb702d%3A0x42deb0434fed3ad5!2sOptickart%20At%20Chimakurthy!5e0!3m2!1sen!2sin!4v1746524763604!5m2!1sen!2sin'
    );
  
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // You can integrate your API call here
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

}
