import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Directive, Optional, Self } from '@angular/core';

@Directive()
export abstract class SharedControlValueAccessor
  implements ControlValueAccessor
{
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this;
    }
  }
  onModelChange: (model: unknown) => void = null as any;
  writeValue(): void {}

  registerOnChange(fn: () => void): void {
    this.onModelChange = fn;
  }

  registerOnTouched(): void {}
}
