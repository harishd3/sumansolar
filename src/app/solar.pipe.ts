import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'solar'
})
export class SolarPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): string {
    // Cast SafeResourceUrl to string directly (not recommended in all cases, but works here)
    return (this.sanitizer.bypassSecurityTrustResourceUrl(url) as SafeResourceUrl) as string;
  }
}
