import { FormControlModule } from '../../../components/form-control/form-control.module';
import { LoginFormComponent } from './login-form.component';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [LoginFormComponent],
  exports: [
    LoginFormComponent,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  imports: [
    FormControlModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class LoginFormModule {}
