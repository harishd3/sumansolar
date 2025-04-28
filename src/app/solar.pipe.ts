import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solar'
})
export class SolarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
