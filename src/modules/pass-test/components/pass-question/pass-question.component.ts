import { ChallengeQuestionForm } from '../../forms/challenge-question.form';
import
{
	Component,
	Input
} from '@angular/core';

@Component({
	selector: 'q-pass-question',
	templateUrl: './pass-question.component.html',
	styleUrls: ['./pass-question.component.scss']
})
export class PassQuestionComponent
{
	@Input('question')
	public readonly form: ChallengeQuestionForm;
}
