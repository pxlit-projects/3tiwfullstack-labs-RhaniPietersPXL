import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {

  transform(rating: number): string {
    if (rating == null) {
      return '☆☆☆☆☆';
    }

    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += (i < rating) ? '★' : '☆';
    }
    return stars;
  }
}
