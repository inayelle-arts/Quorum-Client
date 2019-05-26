import { Component } from '@angular/core';
import { NotificationService } from '@services/notification/notification.service';
import { SignService } from '@services/sign/sign.service';
import { SignUpForm } from '@modules/sign/forms/sign-up.form';
import { UserRole } from '@enums/user-role.enum';
import {MatBottomSheet} from "@angular/material";

@Component({
	selector: 'q-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['../../styles/sign.styles.scss']
})
export class SignUpComponent
{
	private readonly _signService: SignService;
	private readonly _notifyService: NotificationService;
	private readonly _bottomSheet: MatBottomSheet;
	private _isSent: boolean;

	public readonly form: SignUpForm;
	public readonly userRoles: string[];

	public constructor(signService: SignService, notifyService: NotificationService, bottomSheet: MatBottomSheet)
	{
		this._signService = signService;
		this._notifyService = notifyService;
		this._bottomSheet = bottomSheet;
		
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
			.subscribe(() =>
			{
			    this._bottomSheet._openedBottomSheetRef.dismiss();
				this._notifyService.notify(`Success! Now you can sign in (:`);
			});
	}
}
