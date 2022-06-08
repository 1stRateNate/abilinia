import { FormControlModule } from '../../../components/form-control/form-control.module';
import { LoginFormComponent } from './login-form.component';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailLoginModule } from '../../../components/form-control/input/email-login/email-login.module';
import { PasswordModule } from '../../../components/form-control/input/password/password.module';

@NgModule({
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    FormControlModule,
    EmailLoginModule,
    PasswordModule,
  ],
})
export class LoginFormModule {}
