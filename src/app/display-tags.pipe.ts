import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({
  standalone: true,
  name: 'displayTags'
})
export class DisplayTagsPipe implements PipeTransform {
  transform(value: string[], exponent = 1) {
    const result = value.map(value => {
        return value['TagId'];
    })
    return result.join(' ')
  }
}