import { Component } from '@angular/core';
import { SignUpForm } from '../../forms/sign-up.form';
import { SignService } from '../../services/sign.service';

@Component({
	selector: 'q-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['../../styles/sign.styles.scss']
})
export class SignUpComponent
{
	private readonly _signService: SignService;
	private _isSent: boolean;

	public readonly form: SignUpForm;
	public readonly userTypes: string[];

	public constructor(signService: SignService)
	{
		this._signService = signService;
		this._isSent = false;

		this.form = new SignUpForm();
		this.userTypes = ['Student', 'Tutor'];
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

		this._signService.signUp(this.form.viewModel);
	}
}
