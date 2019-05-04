import { Component } from '@angular/core';
import { NotificationService } from '@services/notification/notification.service';
import { SignService } from '@services/sign/sign.service';
import { SignUpForm } from '@modules/sign/forms/sign-up.form';
import { UserRole } from '@enums/user-role.enum';
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
	public readonly userRoles: string[];

	public constructor(signService: SignService, notifyService: NotificationService, userService: UserService)
	{
		this._signService = signService;
		this._notifyService = notifyService;
		this._userService = userService;
		this._isSent = false;

		this.form = new SignUpForm();
		this.userRoles = Object.keys(UserRole).map(k => k as string);
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
