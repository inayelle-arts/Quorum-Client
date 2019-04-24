import { FormBase } from '@base/form.base';
import { NewAnswerViewModel } from '../view-models/new-answer.view-model';
import { FormControl, Validators } from '@angular/forms';
import { NewQuestionForm } from '@modules/new-test/forms/new-question.form';

export class NewAnswerForm extends FormBase<NewAnswerViewModel>
{
	public constructor(parent: NewQuestionForm)
	{
		super({
			content: new FormControl('', Validators.required),
			isCorrect: new FormControl(false)
		});

		this.setParent(parent);
	}

	public get content(): FormControl
	{
		return this.getControl('content');
	}

	public get isCorrect(): FormControl
	{
		return this.getControl('isCorrect');
	}
}