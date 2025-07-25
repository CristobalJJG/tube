import { Component, Input } from '@angular/core';
import { Video } from '../../types/Video';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() video!: Video;
  constructor() { }


}
