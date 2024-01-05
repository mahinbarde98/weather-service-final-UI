import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  transform(value: any, searchText: any): any {
    if (!value || !searchText) {
      return value;
    }

    return value.filter((e: any) => {
      return e.cityName.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
