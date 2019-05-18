import { Component, Input } from '@angular/core';
import { NewQuestionForm } from '@modules/new-test/forms/new-question.form';

@Component({
	selector: 'q-new-question',
	templateUrl: './new-question.component.html',
	styleUrls: ['../../styles/new-test.styles.scss']
})
export class NewQuestionComponent
{
	@Input()
	public readonly form: NewQuestionForm;

	public removeAnswer(index: number): void
	{
		this.form.removeAnswer(index);
	}

	public get isAnswerRemoveable(): boolean
	{
		return this.form.answers.length > 2;
	}
}
