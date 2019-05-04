import { ChallengeQuestionForm } from '@modules/challenge-test/forms/challenge-question.form';
import
{
	Component,
	Input
} from '@angular/core';

@Component({
	selector: 'q-challenge-question',
	templateUrl: './challenge-question.component.html',
	styleUrls: ['./challenge-question.component.scss']
})
export class ChallengeQuestionComponent
{
	@Input('question')
	public readonly form: ChallengeQuestionForm;
}
