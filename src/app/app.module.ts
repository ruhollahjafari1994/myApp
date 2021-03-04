import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuckComponent } from './fuck/fuck.component';
import { AssComponent } from './ass/ass.component';
import { FooterComponent } from './footer/footer.component';
import { MiniSliderComponent } from './mini-slider/mini-slider.component';
import { WildCardsComponent } from './wild-cards/wild-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    FuckComponent,
    AssComponent,
    FooterComponent,
    MiniSliderComponent,
    WildCardsComponent,


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
