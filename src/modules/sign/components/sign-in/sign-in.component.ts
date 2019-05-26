import {Component} from '@angular/core';
import {NotificationService} from '@services/notification/notification.service';
import {SignInForm} from '@modules/sign/forms/sign-in.form';
import {SignService} from '@services/sign/sign.service';
import {UserService} from '@services/user/user.service';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import 'rxjs/operator/catch';
import {MatBottomSheet} from "@angular/material";

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
	private readonly _bottomSheet: MatBottomSheet;
	private readonly _router: Router;
	private _isSent: boolean;
	
	public readonly form: SignInForm;
	
	public constructor(
		signService: SignService,
		userService: UserService,
		notifyService: NotificationService,
		bottomSheet: MatBottomSheet,
		router: Router)
	{
		this._signService = signService;
		this._userService = userService;
		this._notifyService = notifyService;
		this._bottomSheet = bottomSheet;
		this._router = router;
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
			.catch(error =>
			{
				this._notifyService.notify('Signing in failed...');
				
				this._isSent = false;
				
				return throwError(error);
			})
			.subscribe(result =>
			{
				this._userService.store(result.token);
				this._notifyService.notify(`Success! [${this._userService.current.email}]`);
				
				this._bottomSheet._openedBottomSheetRef.dismiss();
				
				this._router.navigate(['']);
			});
	}
}
