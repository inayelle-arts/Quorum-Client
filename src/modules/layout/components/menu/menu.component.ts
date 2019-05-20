import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { NotificationService } from '@services/notification/notification.service';
import { Router } from '@angular/router';
import { SignInComponent } from '@modules/sign/components/sign-in/sign-in.component';
import { SignUpComponent } from '@modules/sign/components/sign-up/sign-up.component';
import { UserService } from '@services/user/user.service';
import { UserRole } from '@enums/user-role.enum';

@Component({
	selector: 'q-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent
{
	private readonly _userService: UserService;
	private readonly _bottomSheet: MatBottomSheet;
	private readonly _notifyService: NotificationService;
	private readonly _router: Router;

	public constructor(
		bottomSheet: MatBottomSheet,
		userService: UserService,
		router: Router,
		notifyService: NotificationService
	)
	{
		this._userService = userService;
		this._bottomSheet = bottomSheet;
		this._notifyService = notifyService;
		this._router = router;
	}

	public get loggedIn(): boolean
	{
		return this._userService.loggedIn;
	}

	public get isTutor(): boolean
	{
		return this._userService.current.role === UserRole.Tutor;
	}

	public onSignInClick(): void
	{
		this._bottomSheet.open(SignInComponent, {});
	}

	public onSignUpClick(): void
	{
		this._bottomSheet.open(SignUpComponent);
	}

	public onLeaveClick(): void
	{
		this._userService.unstore();

		this._notifyService.notify('Good bye!');

		this._router.navigate(['/']);
	}

	public onProfileClick(): void
	{
		this._router.navigate(['/results']);
	}

	public onMyTestsClick(): void
	{
		this._router.navigate(['/my-tests']);
	}
}
