import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-system',
  templateUrl: './rating-system.component.html',
  styleUrls: ['./rating-system.component.css']
})
export class RatingSystemComponent {
  currentRating = 0;

  rateRecipe(star: number) {
    this.currentRating = star;
  }
  
}
