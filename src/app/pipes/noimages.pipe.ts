import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimages'
})
export class NoimagesPipe implements PipeTransform {

  transform(images: any ): string {
    const url = 'http://image.tmdb.org/t/p/original';
    if (!images) {
      return 'assets/img/noimage.png';
    }
    return url.concat(images);
  }
}
