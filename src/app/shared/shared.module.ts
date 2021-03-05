import { NgModule } from '@angular/core';

// Diretivas
import { UnlessDirective } from './directives/unless.directive';
import { WindowResizeDirective } from './directives/window-resize.directive';
import { CheckDecimalPlacesDirective } from './directives/check-decimal-places.directive';

// Pipes
import { ConcatenateArrayValuesPipe } from './pipes/concatenate-array-values.pipe';

// Componentes
import { RezisableComponent } from './components/rezisable/rezisable.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ConcatenateArrayValuesPipe,
    CheckDecimalPlacesDirective,
    WindowResizeDirective,
    RezisableComponent,
    UnlessDirective,
    StructuralDirectiveComponent,
  ],
  imports: [CommonModule],
  exports: [
    ConcatenateArrayValuesPipe,
    CheckDecimalPlacesDirective,
    WindowResizeDirective,
    RezisableComponent,
    UnlessDirective,
    StructuralDirectiveComponent,
  ],
})
export class SharedModule {}
