import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

interface Buttons {
  primaryAction: PoModalAction;
  secundaryAction: PoModalAction;
}

@Component({
  selector: 'app-personalized-modal',
  templateUrl: './personalized-modal.component.html',
  styleUrls: ['./personalized-modal.component.less'],
})
export class PersonalizedModalComponent implements OnInit {
  @Input() labelPrimary: string;
  @Input() labelSecondary: string;
  @Input() hasLabel: boolean;
  @Output() primaryActionFired = new EventEmitter<void>();
  @Output() secondaryActionFired = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();
  @Input() message = '';
  @Input() success = true;
  @Input() showIcon = true;
  @Input() hideClose = true;
  @Input() size = 'auto';
  @Input() customCssClasses = false;
  @ViewChild('modal') modal: PoModalComponent;
  private subjectLabelPrimary$ = new ReplaySubject<string>(1);
  private subjectLabelSecondary$ = new ReplaySubject<string>(1);
  buttons$: Observable<Buttons>;
  toggleModal$ = new Subject<boolean>();

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.toggleModal$.pipe(
      map(() => {
        const element = this.elRef.nativeElement.querySelector('.po-modal');

        if (element) {
          console.log(element);
        }
      })
    );

    this.subjectLabelPrimary$.next(this.labelPrimary);
    this.subjectLabelSecondary$.next(this.labelSecondary);
    const combined = combineLatest([
      this.subjectLabelPrimary$,
      this.subjectLabelSecondary$,
    ]);
    this.buttons$ = combined.pipe(
      map(([labelPrimary, labelSecondary]) => {
        labelPrimary = labelPrimary || 'Confirmar';
        labelSecondary = this.hasLabel
          ? labelSecondary || 'Cancelar'
          : undefined;
        if (labelSecondary) {
          return {
            primaryAction: {
              label: labelPrimary,
              action: this.primaryAction.bind(this),
            },
            secundaryAction: {
              label: labelSecondary,
              action: this.secondaryAction.bind(this),
            },
          } as Buttons;
        }
        return {
          primaryAction: {
            label: labelPrimary,
            action: this.primaryAction.bind(this),
          },
        } as Buttons;
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['labelPrimary']) {
      this.subjectLabelPrimary$.next(this.labelPrimary);
    }
    if (changes['labelSecondary']) {
      this.subjectLabelSecondary$.next(this.labelSecondary);
    }
  }

  private primaryAction(): void {
    this.close();
    this.primaryActionFired.emit();
  }

  private secondaryAction(): void {
    this.close();
    this.secondaryActionFired.emit();
  }

  open() {
    this.modal.open();
    this.toggleModal$.next();
  }

  close(): void {
    this.modal.close();
  }
}
