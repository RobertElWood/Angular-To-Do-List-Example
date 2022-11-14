import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    DeleteitemComponent,
    UpdateitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
