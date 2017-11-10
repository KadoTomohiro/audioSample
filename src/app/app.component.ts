import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { VoiceService } from './voice.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AudioService } from './audio.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('wave') wave;
  context: CanvasRenderingContext2D;

  audio: SafeUrl;

  stream: MediaStream;

  interval: Observable<any>;

  constructor(private voiceService: VoiceService, private domSanitizer: DomSanitizer, private audioService: AudioService) {
    this.interval = Observable.interval(50);

  }

  recoding() {
    this.voiceService.recording()
      .then(stream => {
        this.stream = stream;
        return stream;
      })
      .then(stream => {
        const resourceUrl = window.URL.createObjectURL(stream);
        this.audio = this.domSanitizer.bypassSecurityTrustUrl(resourceUrl);
      });
  }

  stop() {
    this.stream.getAudioTracks().forEach(track => {
      track.stop();
    });
  }

}
