import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'Toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  message = '';
  type = 'info';
  visible = false;

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toastService.toastState$.subscribe(state => {
      this.message = state.message;
      this.type = state.type;
      this.visible = state.visible;
    });
  }
}
