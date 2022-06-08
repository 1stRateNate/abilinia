import { NgModule } from '@angular/core';
import { PasswordComponent } from './password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasswordComponent],
  exports: [PasswordComponent],
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class PasswordModule {}
