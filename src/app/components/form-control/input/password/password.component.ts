import { Component, Optional, Self } from '@angular/core';
import { SharedControlValueAccessor } from '../../accessors/shared-control-value-accessor';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent extends SharedControlValueAccessor {
  constructor(@Optional() @Self() public override ngControl: NgControl) {
    super(ngControl);
  }

  get control(): FormControl {
    return this.ngControl?.control as FormControl;
  }
}
