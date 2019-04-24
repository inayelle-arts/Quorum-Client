import { FormBase } from '@base/form.base';
import { FormControl, Validators } from '@angular/forms';
import { SignUpViewModel } from '../view-models/sign-up.view-model';

export class SignUpForm extends FormBase<SignUpViewModel>
{
	public constructor()
	{
		super({
			userType: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(8)])
		});
	}

	public get userType(): FormControl
	{
		return this.getControl('userType');
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