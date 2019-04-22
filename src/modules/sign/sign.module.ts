import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/modules/material/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignService } from './services/sign.service';

@NgModule({
	declarations: [
		SignInComponent,
		SignUpComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	entryComponents: [
		SignInComponent,
		SignUpComponent
	],
	providers: [
		SignService
	]
})
export class SignModule { }
