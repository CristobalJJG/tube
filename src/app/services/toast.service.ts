import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<{ message: string, type: string, visible: boolean }>({ message: '', type: 'info', visible: false });

  toastState$ = this.toastSubject.asObservable();

  show(message: string, type: string = 'info', duration: number = 3000) {
    this.toastSubject.next({ message, type, visible: true });
    setTimeout(() => {
      this.toastSubject.next({ message: '', type, visible: false });
    }, duration);
  }
}