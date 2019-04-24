import { ChallengeAnswerForm } from '../../forms/challenge-answer.form';
import
{
	Component,
	Input
} from '@angular/core';

@Component({
	selector: 'q-challenge-answer',
	templateUrl: './challenge-answer.component.html',
	styleUrls: ['./challenge-answer.component.scss']
})
export class ChallengeAnswerComponent
{
	@Input('answer')
	public readonly form: ChallengeAnswerForm;
}