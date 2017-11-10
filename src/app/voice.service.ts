import { Injectable } from '@angular/core';

@Injectable()
export class VoiceService {

  readonly device: any;

  constructor() {
    this.device = navigator.mediaDevices;
  }

  recording(): Promise<MediaStream> {
    return this.device.getUserMedia({audio: true})
      .then(stream => {
        return stream;

      });
  }

}
