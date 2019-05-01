import { Component } from '@angular/core';
import { SignUpForm } from '../../forms/sign-up.form';
import { SignService } from '../../services/sign.service';
import { NotificationService } from '@services/notification.service';
import { UserService } from '@services/user/user.service';

@Component({
	selector: 'q-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['../../styles/sign.styles.scss']
})
export class SignUpComponent
{
	private readonly _signService: SignService;
	private readonly _userService: UserService;
	private readonly _notifyService: NotificationService;
	private _isSent: boolean;

	public readonly form: SignUpForm;
	public readonly userTypes: string[];

	public constructor(signService: SignService, notifyService: NotificationService, userService: UserService)
	{
		this._signService = signService;
		this._notifyService = notifyService;
		this._userService = userService;
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

		this._signService.signUp(this.form.viewModel)
			.subscribe(result =>
			{
				this._userService.store(result.token);
				this._notifyService.notify(`Success! [${this._userService.current.email}]`);
			});
	}
}
