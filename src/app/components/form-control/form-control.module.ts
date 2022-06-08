import {NgModule} from "@angular/core";
import {FormControlComponent} from "./form-control.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [FormControlComponent],
  exports: [FormControlComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class FormControlModule {}
