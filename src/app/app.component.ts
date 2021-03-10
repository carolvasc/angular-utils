import { Component } from '@angular/core';
import { PersonalizedModalService } from './po-ui/personalized-modal/personalized-modal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-utils';

  constructor(private dialogService: PersonalizedModalService) {}

  openModal() {
    this.dialogService.open({
      message: 'Mensagem escrita',
      primaryAction: {
        callback: () => {},
      },
    });
  }
}
