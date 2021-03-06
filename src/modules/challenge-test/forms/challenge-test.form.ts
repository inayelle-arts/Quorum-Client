import { ChallengedTestViewModel } from '@services/challenge/view-models/challenged-test.view-model';
import { ChallengeQuestionForm } from './challenge-question.form';
import { ChallengeTestResultModel } from '@services/challenge/result-models/challenge-test.result-model';
import
{
	FormArray,
	FormControl
} from '@angular/forms';
import { FormBase } from '@base/form.base';

export class ChallengeTestForm extends FormBase<ChallengedTestViewModel>
{
	public readonly model: ChallengeTestResultModel;

	public constructor(testModel: ChallengeTestResultModel)
	{
		super({
			sourceTestId: new FormControl(testModel.id),
			challengedAt: new FormControl(),
			questions: new FormArray([])
		});

		testModel.questions.forEach(q => this.questions.push(new ChallengeQuestionForm(q, this)));

		this.model = testModel;
	}

	public get questions(): FormArray
	{
		return this.getArray('questions');
	}

	public get challengedAt() : FormControl
	{
		return this.getControl('challengedAt');
	}
	
	public questionAt(index: number): ChallengeQuestionForm
	{
		return this.questions.get([index]) as ChallengeQuestionForm;
	}
}