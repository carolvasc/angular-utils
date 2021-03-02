import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchFieldComponent),
      multi: true,
    },
  ],
})
export class SearchFieldComponent implements ControlValueAccessor {
  private pSearchValue?: string;
  @Input()
  placeholder = '';
  @Input()
  disabled = false;
  @Input()
  showAdvancedSearch = true;
  @Output()
  search = new EventEmitter<string | undefined>();
  @Output()
  searchAdvanced = new EventEmitter();
  private propagateChange = (_: string) => {};

  get searchValue(): string {
    return this.pSearchValue;
  }

  set searchValue(value: string) {
    value = value === '' ? undefined : value;
    if (value !== this.pSearchValue) {
      this.pSearchValue = value;
      this.propagateChange(this.pSearchValue);
    }
  }

  onSubmit(): void {
    this.search.emit(this.searchValue);
  }

  writeValue(value: string): void {
    this.searchValue = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(_: any): void {}
}
