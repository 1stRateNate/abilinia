import { NgModule } from '@angular/core';
import { EmailLoginComponent } from './email-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmailLoginComponent],
  exports: [EmailLoginComponent],
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class EmailLoginModule {}
