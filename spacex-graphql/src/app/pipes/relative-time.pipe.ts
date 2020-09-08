import { Pipe, PipeTransform } from '@angular/core';

const oneDay = 1000 * 60 * 60 * 24 ;

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(utcTime: string): string {
    const today = new Date().getTime();
    const compareDate = new Date(utcTime).getTime();
    const message = compareDate >= today ? 'Days remaining: ' : 'Days since launch: ';

    const diffInDays = Math.abs(Math.round( compareDate - today) / oneDay).toFixed(0);

    return `${message} ${diffInDays}`;
  }
}
