import { Injectable } from '@angular/core';

import { config } from './../../config.ts'

@Injectable()
export class TtsService {
  private key: string = config.voicebox.key;
  private voice: string = config.voicebox.ttsVoice || 'Amelia';
  voices: Object[] = [];
  synthesize: any;
  window;
  options: Object;

  constructor() { 
    this.window = window;
    this.options = {
      voice: this.voice,
      key: this.key
    };
  }

  synthesizeSpeech(text: string) {
    this.synthesize = this.window.tts(this.options, text);
  }
}