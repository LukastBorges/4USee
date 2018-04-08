import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any[], filter: string): any {
    
    if (filter) {
      let filtered = value.filter(elmt => elmt.category === filter);
      return filtered;
    }
    return value;
  }

}
