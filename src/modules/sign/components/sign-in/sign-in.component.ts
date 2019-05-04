import { Component } from '@angular/core';
import { NotificationService } from '@services/notification/notification.service';
import { SignInForm } from '@modules/sign/forms/sign-in.form';
import { SignService } from '@services/sign/sign.service';
import { UserService } from '@services/user/user.service';

@Component({
	selector: 'q-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['../../styles/sign.styles.scss']
})
export class SignInComponent
{
	private readonly _signService: SignService;
	private readonly _userService: UserService;
	private readonly _notifyService: NotificationService;
	private _isSent: boolean;

	public readonly form: SignInForm;

	public constructor(signService: SignService, userService: UserService, notifyService: NotificationService)
	{
		this._signService = signService;
		this._userService = userService;
		this._notifyService = notifyService;
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

		this._signService.signIn(this.form.viewModel)
			.subscribe(result =>
			{
				this._userService.store(result.token);
				this._notifyService.notify(`Success! [${this._userService.current.email}]`);
			});
	}
}
