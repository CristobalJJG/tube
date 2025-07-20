import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {
  private recognition: any;
  private isSupported: boolean = false;

  constructor() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    console.log('SpeechRecognition:', SpeechRecognition);
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.isSupported = true;
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        console.log('Recognized text:', transcript);
        // Aquí puedes procesar el texto reconocido como desees
      };

      this.recognition.onerror = (event: any) => {
        console.error('Error occurred in recognition: ' + event.error);
      };
    } else console.warn('SpeechRecognition API no está soportada en este navegador.');
  }

  startRecognition() {
    if (this.isSupported) this.recognition.start();
    else console.warn('No se puede iniciar el reconocimiento de voz: API no soportada.');
  }

  stopRecognition() {
    if (this.isSupported)
      this.recognition.stop();
  }
}