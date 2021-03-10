import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckDecimalPlacesDirective } from './shared/directives/check-decimal-places.directive';
import { ConcatenateArrayValuesPipe } from './shared/pipes/concatenate-array-values.pipe';
import { WindowResizeDirective } from './shared/directives/window-resize.directive';
import { RezisableComponent } from './shared/components/rezisable/rezisable.component';
import { UnlessDirective } from './shared/directives/unless.directive';
import { StructuralDirectiveComponent } from './shared/components/structural-directive/structural-directive.component';
import { PoModule } from '@po-ui/ng-components';
import { ListWithPageDefaultComponent } from './po-ui/list-with-page-default/list-with-page-default.component';
import { ReportListHeaderComponent } from './po-ui/report-list-header/report-list-header.component';
import { SearchFieldComponent } from './po-ui/search-field/search-field.component';
import { PoModalModule } from '@po-ui/ng-components';
import { ContainerContentTemplateComponent } from './study/container-content-template/container-content-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcatenateArrayValuesPipe,
    CheckDecimalPlacesDirective,
    WindowResizeDirective,
    RezisableComponent,
    UnlessDirective,
    StructuralDirectiveComponent,
    ListWithPageDefaultComponent,
    ReportListHeaderComponent,
    SearchFieldComponent,
    ContainerContentTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModalModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
