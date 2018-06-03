import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { DirectionsService } from './directions.service';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    FormComponent,
    InputComponent,
    ModalComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DirectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
