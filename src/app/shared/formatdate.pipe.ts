import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate',
})
export class FormatdatePipe implements PipeTransform {
  transform(value: any): any {
    const format = 'dd-M-yyyy hh:mm:ss aa';
    const locale = 'en-US';
    let formattedDate = formatDate(value, format, locale);

    if (formattedDate.includes('PM')) {
      formattedDate = formattedDate.replace('PM', 'pm');
    } else {
      formattedDate = formattedDate.replace('AM', 'am');
    }
    return formattedDate;
  }
}
