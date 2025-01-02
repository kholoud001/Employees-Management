import { DateFormatPipe } from './date-format.pipe';
import {DatePipe} from '@angular/common';

describe('DateFormatPipe', () => {
  it('create an instance', () => {
    const datePipe = new DatePipe('fr-FR');
    const pipe = new DateFormatPipe(datePipe);
    expect(pipe).toBeTruthy();
  });
});
