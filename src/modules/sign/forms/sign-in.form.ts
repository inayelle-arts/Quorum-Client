import { FormBase } from '@base/form.base';
import { FormControl, Validators } from '@angular/forms';
import { SignInViewModel } from '../view-models/sign-in.view-model';

export class SignInForm extends FormBase<SignInViewModel>
{
	public constructor()
	{
		super({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required)
		});
	}

	public get email(): FormControl
	{
		return this.getControl('email');
	}

	public get password(): FormControl
	{
		return this.getControl('password');
	}
}