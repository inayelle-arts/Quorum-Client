import { Component } from '@angular/core';
import { SignInForm } from '../../forms/sign-in.form';
import { SignService } from '../../services/sign.service';

@Component({
	selector: 'q-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['../../styles/sign.styles.scss']
})
export class SignInComponent
{
	private readonly _signService: SignService;
	private _isSent: boolean;

	public readonly form: SignInForm;

	public constructor(signService: SignService)
	{
		this._signService = signService;
		this._isSent = false;
		this.form = new SignInForm();
	}

	public get isSent(): boolean
	{
		return this._isSent;
	}

	public onSubmit(): void
	{
		if (this.form.invalid)
		{
			return;
		}

		this._isSent = true;

		this._signService.signIn(this.form.viewModel);
	}
}
