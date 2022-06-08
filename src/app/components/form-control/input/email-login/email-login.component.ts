import { Component, OnInit, Optional, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { SharedControlValueAccessor } from '../../accessors/shared-control-value-accessor';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
})
export class EmailLoginComponent extends SharedControlValueAccessor {
  constructor(@Optional() @Self() public override ngControl: NgControl) {
    super(ngControl);
  }

  get control(): FormControl {
    return this.ngControl?.control as FormControl;
  }
}
