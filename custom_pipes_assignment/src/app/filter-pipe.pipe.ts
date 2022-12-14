import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(names: string[], unit: string) {
    return names.filter((n) => n == unit);
  }
}
