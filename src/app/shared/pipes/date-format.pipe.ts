import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let currentDate = new Date();
    let dateParam = new Date(value);

    if (dateParam.getDay() === currentDate.getDay() && dateParam.getMonth() === currentDate.getMonth()
      && dateParam.getFullYear() === currentDate.getFullYear()) {
      return dateParam.toLocaleTimeString('hu', {timeStyle: "short"});
    } else if (dateParam.getFullYear() === currentDate.getFullYear()) {
      return dateParam.toLocaleString('hu',{month:'short', day:'numeric'})
    }
    return dateParam.getFullYear().toString();
  }
}
