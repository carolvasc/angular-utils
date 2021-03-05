import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { ListWithPageDefaultComponent } from './list-with-page-default/list-with-page-default.component';
import { ReportListHeaderComponent } from './report-list-header/report-list-header.component';
import { SearchFieldComponent } from './search-field/search-field.component';
// import { PersonalizedModalComponent } from './personalized-modal/personalized-modal.component';

// Modulos
import { PoModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    ListWithPageDefaultComponent,
    ReportListHeaderComponent,
    SearchFieldComponent,
    // PersonalizedModalComponent,
  ],
  imports: [
    CommonModule,
    PoModule,
    PoModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListWithPageDefaultComponent,
    ReportListHeaderComponent,
    SearchFieldComponent,
    PersonalizedModalComponent,
  ],
})
export class PoUiComponentsModule {}
