import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-report-list-header',
  templateUrl: './report-list-header.component.html',
  styleUrls: ['./report-list-header.component.less'],
})
export class ReportListHeaderComponent implements OnInit {
  @Input() showAdvancedSearch = true;
  @Input() showExportButton = true;
  @Input() showPeerSuggestionApproveAllButton = true;
  @Input() advancedSearchForm: FormGroup;
  @Input() advancedSearchMainField: string;
  @Input() advancedSearchPlaceHolder = '';
  primaryModalButton: PoModalAction;
  secondaryModalButton: PoModalAction;
  @ViewChild(PoModalComponent)
  private modal: PoModalComponent;

  set mainSearchField(value: string) {
    if (this.advancedSearchForm && this.advancedSearchMainField) {
      this.advancedSearchMainFormControl.setValue(value);
    }
  }

  get mainSearchField(): string {
    if (this.advancedSearchForm && this.advancedSearchMainField) {
      return this.advancedSearchMainFormControl.value;
    }
  }

  private get advancedSearchMainFormControl(): AbstractControl {
    return this.advancedSearchForm.get(this.advancedSearchMainField);
  }

  constructor() {}

  ngOnInit(): void {
    this.initModalActions();
  }

  private initModalActions(): void {
    this.primaryModalButton = {
      label: 'Aplicar filtro',
      action: this.filterAdvanced.bind(this),
    };

    this.secondaryModalButton = {
      label: 'Limpar filtro',
      action: this.clearAdvancedFilter.bind(this),
    };
  }

  async filterAdvanced(): Promise<void> {
    if (this.advancedSearchForm.valid) {
      this.modal.close();
    }
  }

  clearAdvancedFilter(): void {
    this.advancedSearchForm.reset();
  }

  public async onSimpleSearch(): Promise<void> {
    if (this.advancedSearchMainFormControl.valid) {
      const value = this.advancedSearchMainFormControl.value;
      this.clearAdvancedFilter();
      this.advancedSearchMainFormControl.setValue(value);
      this.modal.close();
    }
  }
}
