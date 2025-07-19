import { Component, Input } from '@angular/core';
import { Video } from '../../types/Video';
import { RouterModule } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() video!: Video;
  constructor(private toastService: ToastService) { }

  mostrarToast() {
    this.toastService.show('Mensaje de hola', 'error', 50000);
  }
}
