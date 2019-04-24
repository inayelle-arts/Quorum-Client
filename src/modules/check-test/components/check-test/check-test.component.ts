import { Component, OnInit } from '@angular/core';
import { CheckTestService } from '@modules/check-test/services/check-test.service';
import { CheckTestResultModel } from '@modules/check-test/result-models/check-test.result-model';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'q-check-test',
	templateUrl: './check-test.component.html',
	styleUrls: ['./check-test.component.scss']
})
export class CheckTestComponent implements OnInit
{
	private readonly _checkService: CheckTestService;
	private readonly _route: ActivatedRoute;

	private _isLoaded: boolean = false;
	private _testModel: CheckTestResultModel = null;

	public constructor(checkService: CheckTestService, route: ActivatedRoute)
	{
		this._checkService = checkService;
		this._route = route;
	}

	public get testModel(): CheckTestResultModel
	{
		return this._testModel;
	}

	public get loaded(): boolean
	{
		return this._isLoaded;
	}

	public ngOnInit(): void
	{
		const params = this._route.snapshot.params;

		const id = params['id'] as number;

		if (id == null || id == undefined)
		{
			console.log(`bad id ${id}`);
			//redirect to 404
			return;
		}

		this._checkService.getTestResults(id).subscribe(t =>
		{
			this._testModel = t;
			this._isLoaded = true;
		});
	}
}
