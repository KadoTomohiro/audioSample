import { Injectable } from '@angular/core';

@Injectable()
export class AudioService {
  private readonly context: AudioContext;

  readonly waveType = {
    time: 'time',
    spectrum: 'spectrum'
  };

  constructor() {
    this.context = new AudioContext;
  }

  audioAnalyser(stream: MediaStream): AnalyserNode {
    const source = this.context.createMediaStreamSource(stream);
    const analyser = this.context.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);

    return analyser;
  }

  getTimeWave(analyser: AnalyserNode): Uint8Array {
    const times = new Uint8Array(analyser.fftSize);
    analyser.getByteTimeDomainData(times);

    return times;
  }

  getSpectrumsWave(analyser: AnalyserNode): Uint8Array {
    const spectrums = new Uint8Array(analyser.frequencyBinCount);  // Array size is 1024 (half of FFT size)
    analyser.getByteFrequencyData(spectrums);

    return spectrums;
  }
}
