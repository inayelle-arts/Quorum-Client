import { Component, Input } from '@angular/core';
import { NewQuestionForm } from '../../forms/new-question.form';

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
}
