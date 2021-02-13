import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckDecimalPlacesDirective } from './shared/directives/check-decimal-places.directive';
import { ConcatenateArrayValuesPipe } from './shared/pipes/concatenate-array-values.pipe';
import { WindowResizeDirective } from './shared/directives/window-resize.directive';
import { RezisableComponent } from './shared/components/rezisable/rezisable.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcatenateArrayValuesPipe,
    CheckDecimalPlacesDirective,
    WindowResizeDirective,
    RezisableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
