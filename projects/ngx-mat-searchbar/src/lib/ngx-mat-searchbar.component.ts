import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'ngx-mat-searchbar',
  templateUrl: './ngx-mat-searchbar.component.html',
  styleUrl: './ngx-mat-searchbar.component.scss',
})
export class NgxMatSearchbarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('filter') filterInput: ElementRef | undefined;
  private _value = '';
  @Input() public set value(val: string) {
    this._value = val;
    this.change.emit(val);
  }
  public get value() {
    return this._value;
  }
  /** Emit filter value on change events */
  @Output() public change = new EventEmitter<string>();
  /** Text to display as the placeholder of the material form field */
  @Input() public placeholder = 'Search';
  /** Disable form input if true */
  @Input() public disabled = false;
  /** Time in milliseconds to debounce the change emit output */
  @Input() public debounce = 250;
  /** Material icon to display as a prefix to the search input */
  @Input() public matIconSearch = 'search';
  /** Material icon to display as a clear button suffix to the search input */
  @Input() public matIconClear = 'cancel';
  /** Appearance of search input form field */
  @Input() public appearance: 'fill' | 'outline' = 'fill';
  private _filterSubject = new Subject<string | undefined>();
  private sub: Subscription | undefined;

  ngAfterViewInit() {
    this.sub = this._filterSubject
      .pipe(debounceTime(this.debounce))
      .subscribe(() => {
        this.change.emit(this._value);
      });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  protected keyupEvent(event: KeyboardEvent) {
    this._filterSubject.next(this._value);
  }
  /** Set current value of search field to an empty string
   * @NOTE This will trigger change output emitter
   */
  protected clear() {
    this.value = '';
    this._filterSubject.next(this.value);
  }
  /** Focus cursor within search component form field */
  public focus() {
    this.filterInput?.nativeElement.focus();
  }
}
