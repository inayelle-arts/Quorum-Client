import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { SignInComponent } from 'src/modules/sign/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/modules/sign/components/sign-up/sign-up.component';

@Component({
	selector: 'q-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent
{
	private readonly _bottomSheet: MatBottomSheet;

	public constructor(bottomSheet: MatBottomSheet)
	{
		this._bottomSheet = bottomSheet;
	}

	public onSignInClick(): void
	{
		this._bottomSheet.open(SignInComponent);
	}

	public onSignUpClick(): void
	{
		this._bottomSheet.open(SignUpComponent);
	}
}
