import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { first } from 'rxjs/operators';
import { PersonalizedModalComponent } from './personalized-modal.component';

export interface AttentionDialogServiceAction {
  callback: () => void;
  label?: string;
}

export interface OpenArguments {
  message: string;
  primaryAction: AttentionDialogServiceAction;
  secondaryAction?: AttentionDialogServiceAction;
  success?: boolean;
  showIcon?: boolean;
  hideClose?: boolean;
  size?: string;
  customCssClasses?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PersonalizedModalService {
  private dialogComponentRef: ComponentRef<PersonalizedModalComponent>;

  get component(): PersonalizedModalComponent {
    return this.dialogComponentRef.instance;
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  private addComponentToBody(): void {
    const domElem = (this.dialogComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  private createComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      PersonalizedModalComponent
    );
    this.dialogComponentRef = componentFactory.create(this.injector);
    this.appRef.attachView(this.dialogComponentRef.hostView);
  }

  open(openArguments: OpenArguments): void {
    this.createComponent();
    this.addComponentToBody();
    this.setComponentInputs(openArguments);
    this.subscribeToOutputs(openArguments);
    this.dialogComponentRef.changeDetectorRef.detectChanges();
    this.component.open();
  }

  private subscribeToOutputs(openArguments: OpenArguments): void {
    this.component.primaryActionFired
      .pipe(first())
      .subscribe(() => openArguments.primaryAction.callback());
    if (openArguments.secondaryAction) {
      this.component.secondaryActionFired
        .pipe(first())
        .subscribe(() => openArguments.secondaryAction.callback());
    }
    this.component.closed
      .pipe(first())
      .subscribe(() => this.dialogComponentRef.destroy());
  }

  private setComponentInputs(openArguments: OpenArguments): void {
    this.component.hasLabel = false;
    this.component.message = openArguments.message;
    this.component.labelPrimary = openArguments.primaryAction.label;
    if (openArguments.secondaryAction) {
      this.component.hasLabel = true;
      if (openArguments.secondaryAction.label) {
        this.component.labelSecondary = openArguments.secondaryAction.label;
      }
    }
    if (openArguments.success !== undefined) {
      this.component.success = openArguments.success;
    }

    if (openArguments.showIcon !== undefined) {
      this.component.showIcon = openArguments.showIcon;
    }

    if (openArguments.hideClose !== undefined) {
      this.component.hideClose = openArguments.hideClose;
    }

    if (openArguments.size !== undefined) {
      this.component.size = openArguments.size;
    }

    if (openArguments.customCssClasses !== undefined) {
      this.component.customCssClasses = openArguments.customCssClasses;
    }
  }

  close(): void {
    this.dialogComponentRef.instance.close();
  }
}
