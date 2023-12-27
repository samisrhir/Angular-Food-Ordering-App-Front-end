import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: any[], category: string): any[] {
    return items.filter(item => item.category === category);
  }
}
