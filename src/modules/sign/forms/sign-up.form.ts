import {FormBase} from '@base/form.base';
import
{
	FormControl,
	Validators
} from '@angular/forms';
import {SignUpViewModel} from '@services/sign/view-models/sign-up.view-model';

export class SignUpForm extends FormBase<SignUpViewModel>
{
	public constructor()
	{
		super({
			role: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(8)])
		});
	}
	
	public get role(): FormControl
	{
		return this.getControl('role');
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