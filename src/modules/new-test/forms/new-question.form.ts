import { FormBase } from '@base/form.base';
import { NewQuestionViewModel } from '../view-models/new-question.view-model';
import { FormControl, Validators, FormArray } from '@angular/forms';
import { NewTestForm } from './new-test.form';
import { NewAnswerForm } from './new-answer.form';

export class NewQuestionForm extends FormBase<NewQuestionViewModel>
{
	public constructor(parent: NewTestForm)
	{
		super({
			content: new FormControl('', Validators.required),
			answers: new FormArray([])
		});

		this.setParent(parent);
	}

	public get content(): FormControl
	{
		return this.getControl('content');
	}

	public get answers(): FormArray
	{
		return this.getArray('answers');
	}

	public addAnswer(): void
	{
		this.answers.push(new NewAnswerForm(this));
	}

	public removeAnswer(index: number): void
	{
		this.answers.removeAt(index);
	}
}