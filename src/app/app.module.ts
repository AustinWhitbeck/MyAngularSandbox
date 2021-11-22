import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LinkbuttonComponent } from './component/buttons/linkbutton/linkbutton.component';
import { CounterComponent } from './component/counter/counter.component';
import { ClickBtnComponent } from './component/buttons/click-btn/click-btn.component';
import { ColorclickersComponent } from './component/colorclickers/colorclickers.component';
import { ColorclickerShapeComponent } from './component/colorclicker-shape/colorclicker-shape.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkbuttonComponent,
    CounterComponent,
    ClickBtnComponent,
    ColorclickersComponent,
    ColorclickerShapeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
