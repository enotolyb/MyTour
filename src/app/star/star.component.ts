import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NOOP = _ => {
};

type ChangeValueListener = (value: string) => void;
type TouchInputListener = () => void;

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StarComponent), multi: true },
  ]
})
export class StarComponent implements ControlValueAccessor {

  value: number;

  private propagateChange = NOOP;

  writeValue(value: number): void {
    this.value = value;
  }

  updateValue(value: number): void {
    this.value = value;
    this.propagateChange(value);
  }

  registerOnChange(fn: ChangeValueListener): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fb: TouchInputListener): void {
  }

}
