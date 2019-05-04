import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@base/component.base';
import { UserService } from '@services/user/user.service';
import { UserRole } from '@enums/user-role.enum';
import { CheckTestService } from '@services/check/check-test.service';
import { ChallengeResultPreviewResultModel } from '@services/challenge/result-models/challenge-result-preview.result-mode';
import { Observable } from 'rxjs';

@Component({
	selector: 'q-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ComponentBase implements OnInit
{
	private readonly _userService: UserService;
	private readonly _checkService: CheckTestService;

	private _results: ChallengeResultPreviewResultModel[] = null;
	private _isLoaded = false;

	public constructor(userService: UserService, challengeService: CheckTestService)
	{
		super();
		this._userService = userService;
		this._checkService = challengeService;
	}

	public get loaded(): boolean
	{
		return this._isLoaded;
	}

	public get email(): string
	{
		return this._userService.current.email;
	}

	public get userRole(): string
	{
		return this._userService.current.role;
	}

	public get resultModels(): ChallengeResultPreviewResultModel[]
	{
		return this._results;
	}

	public ngOnInit(): void
	{
		switch (this._userService.current.role)
		{
			case UserRole.Student:
				{
					this._loadStudentOwnResults();
					break;
				}
			case UserRole.Tutor:
				{
					this._loadTutorResults();
					break;
				}
			default:
				{
					throw new Error('Not impleneted');
				}
		}
	}

	private _loadStudentOwnResults(): void
	{
		this._checkService.getChallengeResultsPreview()
			.subscribe(r =>
			{
				this._results = r;
				this._isLoaded = true;
			});
	}

	private _loadTutorResults(): void
	{
		this._checkService.getStudentsChallengeResultsPreview()
			.subscribe(r =>
			{
				this._results = r;
				this._isLoaded = true;
			});
	}
}
