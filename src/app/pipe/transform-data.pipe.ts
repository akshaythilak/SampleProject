import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return this.getSeverity(value);
  }

  getSeverity(value: any) {
    if (value > 30) {
      return 'High'
    }
    else if (value > 20) {
      return 'Medium'
    }
    return 'Low'
  }

}
