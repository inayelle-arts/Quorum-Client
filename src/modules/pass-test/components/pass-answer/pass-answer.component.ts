import { Component, Input } from '@angular/core';
import { ChallengeAnswerForm } from '../../forms/challenge-answer.form';

@Component({
	selector: 'q-pass-answer',
	templateUrl: './pass-answer.component.html',
	styleUrls: ['./pass-answer.component.scss']
})
export class PassAnswerComponent
{
	@Input('answer')
	public readonly form: ChallengeAnswerForm;
}
