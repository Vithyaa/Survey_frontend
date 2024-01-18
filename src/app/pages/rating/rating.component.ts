import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div>
      <span *ngFor="let value of ratings" (click)="setRating(value)" [class.selected]="value <= selectedRating">
        {{ value }}
      </span>
    </div>
  `,
  styles: [`
    span {
      cursor: pointer;
      margin: 5px;
    }

    span.selected {
      color: orange;
    }
  `]
})
export class RatingComponent {
  @Input() selectedRating = 0;
  ratings = Array.from({ length: 11 }, (_, index) => index + 1);

  setRating(value: number): void {
    this.selectedRating = value;
  }
}
