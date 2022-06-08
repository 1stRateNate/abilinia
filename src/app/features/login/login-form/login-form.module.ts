import { FormControlModule } from '../../../components/form-control/form-control.module';
import { LoginFormComponent } from './login-form.component';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
  imports: [ReactiveFormsModule, MatInputModule, FormControlModule],
})
export class LoginFormModule {}
