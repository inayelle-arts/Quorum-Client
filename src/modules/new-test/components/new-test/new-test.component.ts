import { Component } from '@angular/core';
import { NewTestForm } from '../../forms/new-test.form';
import { NewQuestionForm } from '../../forms/new-question.form';
import { ComponentBase } from '../../../../base/component.base';
import { TestService } from '@services/new-test.service';
import { NewTestViewModel } from '@modules/new-test/view-models/new-test.view-model';
import { NotificationService } from '@services/notification.service';

@Component({
	selector: 'q-new-test',
	templateUrl: './new-test.component.html',
	styleUrls: ['../../styles/new-test.styles.scss']
})
export class NewTestComponent extends ComponentBase
{
	private readonly _newTestService: TestService;
	private readonly _notifyService: NotificationService;

	private _isSent: boolean;

	public readonly form: NewTestForm;

	public constructor(newTestService: TestService, notifyService: NotificationService)
	{
		super();

		this._newTestService = newTestService;
		this._notifyService = notifyService;

		this._isSent = false;
		this.form = new NewTestForm();
		this.form.addQuestion();
	}

	public get isSent(): boolean
	{
		return this._isSent;
	}

	public get hasUnsavedData(): boolean
	{
		return this.form.dirty && !this._isSent;
	}

	public addTag(tag: any): void
	{
		this.form.addTag(tag);
	}

	public removeTag(tag: string): void
	{
		this.form.removeTag(tag);
	}

	public addAnswer(question: NewQuestionForm)
	{
		question.addAnswer();
	}

	public onSubmit(): void
	{
		if (this.form.invalid)
		{
			return;
		}

		this._isSent = true;

		const viewModel = this.form.value as NewTestViewModel;

		this._notifyService.notify('Creating your test...');

		this._newTestService.createTest(viewModel).subscribe(r =>
		{
			this._notifyService.notify('Done!');
		});
	}
}
