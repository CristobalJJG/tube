export interface VoiceRecognitionResult {
  transcript: string;
  confidence: number;
}

export interface VoiceRecognitionServiceConfig {
  language: string;
  continuous: boolean;
  interimResults: boolean;
}