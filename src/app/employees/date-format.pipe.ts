import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'dateFormat',
  standalone:false
})
export class DateFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: any, format: string = 'dd/MMMM/yyyy'): any {
    if (!value) return null;

    return this.datePipe.transform(value, format);
  }

}
