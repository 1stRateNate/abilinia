import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { LoginFormModule } from './login-form/login-form.module';
import { CreateAccountFormModule } from './create-account-form/create-account-form.module';

@NgModule({
  exports: [LoginComponent],
  imports: [MatCardModule, LoginFormModule, CreateAccountFormModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
