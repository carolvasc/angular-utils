import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { ListWithPageDefaultComponent } from './list-with-page-default/list-with-page-default.component';
import { ReportListHeaderComponent } from './report-list-header/report-list-header.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { PersonalizedModalComponent } from './personalized-modal/personalized-modal.component';

// Modulos
import { PoModule } from '@po-ui/ng-components';
import { PoModalModule, PoButtonModule } from '@po-ui/ng-components';

// Serviços
import { PersonalizedModalService } from './personalized-modal/personalized-modal.service';

@NgModule({
  declarations: [
    ListWithPageDefaultComponent,
    ReportListHeaderComponent,
    SearchFieldComponent,
    PersonalizedModalComponent,
  ],
  imports: [
    CommonModule,
    PoModule,
    PoModalModule,
    PoButtonModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListWithPageDefaultComponent,
    ReportListHeaderComponent,
    SearchFieldComponent,
    PersonalizedModalComponent,
  ],
  providers: [PersonalizedModalService],
})
export class PoUiComponentsModule {}
