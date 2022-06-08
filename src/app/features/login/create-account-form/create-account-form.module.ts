import { NgModule } from '@angular/core';
import { CreateAccountFormComponent } from './create-account-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateAccountFormComponent],
  imports: [ReactiveFormsModule],
  exports: [CreateAccountFormComponent],
})
export class CreateAccountFormModule {}
