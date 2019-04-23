import { Component, OnInit } from '@angular/core';
import { ChallengeTestForm } from '../../forms/challenge-test.form';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/services/test.service';
import { ChallengeTestResultModel } from '../../result-models/challenge-test.result-model';

@Component({
	selector: 'q-pass-test',
	templateUrl: './pass-test.component.html',
	styleUrls: ['./pass-test.component.scss']
})
export class PassTestComponent implements OnInit
{
	private readonly _route: ActivatedRoute;
	private readonly _testService: TestService;

	private _form: ChallengeTestForm;
	private _loaded: boolean;
	private _isSent: boolean;

	public constructor(route: ActivatedRoute, testService: TestService)
	{
		this._route = route;
		this._testService = testService;
		this._loaded = false;
		this._isSent = false;
	}

	public get form(): ChallengeTestForm
	{
		return this._form;
	}

	public get loaded(): boolean
	{
		return this._loaded;
	}

	public get isSent(): boolean
	{
		return this._isSent;
	}

	public onSubmit(): void
	{

	}

	public ngOnInit(): void
	{
		const params = this._route.snapshot.params;

		const id = params['id'] as number;

		if (id == null)
		{
			alert('Wrong id');
			return;
		}

		this._testService.getTestForChallenge(id).subscribe(t =>
		{
			this._form = new ChallengeTestForm(t);

			this._loaded = true;
		});
	}
}
