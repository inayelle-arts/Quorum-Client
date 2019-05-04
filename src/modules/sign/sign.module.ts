import { CommonModule } from '@angular/common';
import
{
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';
import { MaterialModule } from '@modules/material/material.module';
import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignService } from '@services/sign/sign.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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
