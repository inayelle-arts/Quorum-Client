import { ActivatedRoute } from '@angular/router';
import { ChallengeService } from '@modules/challenge-test/services/challenge.service';
import { ChallengeTestForm } from '../../forms/challenge-test.form';
import
{
	Component,
	OnInit
} from '@angular/core';
import { ComponentBase } from '../../../../base/component.base';
import { NotificationService } from '@services/notification.service';

@Component({
	selector: 'q-challenge-test',
	templateUrl: './challenge-test.component.html',
	styleUrls: ['./challenge-test.component.scss']
})
export class ChallengeTestComponent extends ComponentBase implements OnInit
{
	private readonly _testService: ChallengeService;
	private readonly _notifyService: NotificationService;
	private readonly _route: ActivatedRoute;


	private _form: ChallengeTestForm;
	private _loaded: boolean;
	private _isSent: boolean;

	public constructor(route: ActivatedRoute, testService: ChallengeService, notifyService: NotificationService)
	{
		super();
		this._route = route;
		this._testService = testService;
		this._notifyService = notifyService;
		this._loaded = false;
		this._isSent = false;
	}

	public get hasUnsavedData(): boolean
	{
		return true;
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
		if (this.form.invalid)
		{
			return;
		}

		this._isSent = true;

		const viewModel = this._form.viewModel;

		this._notifyService.notify('Posting your results...');

		this._testService.challenge(viewModel).subscribe(r =>
		{
			this._notifyService.notify('Done!');
		});
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
