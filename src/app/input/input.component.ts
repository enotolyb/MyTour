import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NOOP = _ => {
};

type ChangeValueListener = (value: string) => void;
type TouchInputListener = () => void;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true },
  ]
})
export class InputComponent implements ControlValueAccessor {

  value: string;

  @Input() type: string = 'text';

  @Input() placeholder: string = '';

  private propagateChange = NOOP;

  writeValue(value: string): void {
    this.value = value;
  }

  updateValue(value: string): void {
    this.value = value;
    this.propagateChange(value);
  }

  clear(): void {
    this.updateValue(null);
  }

  registerOnChange(fn: ChangeValueListener): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fb: TouchInputListener): void {
  }

}
