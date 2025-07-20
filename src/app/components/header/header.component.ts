import { Component } from '@angular/core';
import { VoiceRecognitionService } from '../../services/voice-recognition.service';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private voiceService: VoiceRecognitionService) { }

  onVoiceSearchStart() {
    this.voiceService.startRecognition();
  }

  onVoiceSearchStop() {
    this.voiceService.stopRecognition();
  }
}
