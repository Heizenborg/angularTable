import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InsiteTableModule } from './insite-table/insite-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InsiteTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
