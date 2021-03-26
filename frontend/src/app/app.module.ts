import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NewsComponent } from './components/news/news.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    NewsComponent,
    GallaryComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
