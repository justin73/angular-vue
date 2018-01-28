import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { VueElement } from 'vue-hi-there';
// import 'my-test-vue-custom-element';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    // VueElement
  ],
  imports: [
    BrowserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
