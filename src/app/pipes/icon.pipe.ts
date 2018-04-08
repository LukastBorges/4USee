import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconPipe'
})
export class IconPipe implements PipeTransform {

  transform(value: string): string {
    let mapIcons = {
      image: 'photo',
      rss: 'rss_feed',
      video: 'ondemand_video'
    }
    
    return mapIcons[value];
  }

}
