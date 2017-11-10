import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoiceService } from './voice.service';
import { AudioService } from './audio.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    VoiceService,
    AudioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
