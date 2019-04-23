import { Component } from '@angular/core';
import { NewTestForm } from '../../forms/new-test.form';
import { MatChipInputEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { NewQuestionForm } from '../../forms/new-question.form';

@Component({
	selector: 'q-new-test',
	templateUrl: './new-test.component.html',
	styleUrls: ['../../styles/new-test.styles.scss']
})
export class NewTestComponent
{
	private _isSent: boolean;

	public readonly form: NewTestForm;

	public constructor()
	{
		this._isSent = false;
		this.form = new NewTestForm();
		this.form.addQuestion();
	}

	public get isSent(): boolean
	{
		return this._isSent;
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

		console.log(this.form.value);
	}
}
