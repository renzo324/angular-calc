import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DogyearsComponent } from './dogyears/dogyears.component';
import { LargermanComponent } from './largerman/largerman.component';
import { NumbersortComponent } from './numbersort/numbersort.component';
import { TempconvComponent } from './tempconv/tempconv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DogyearsComponent,
    LargermanComponent,
    NumbersortComponent,
    TempconvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
