import { NgModule } from '@angular/core';
import { NgxMatSearchbarModule } from 'NgxMatSearchbar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [NgxMatSearchbarModule, AppRoutingModule, BrowserModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
