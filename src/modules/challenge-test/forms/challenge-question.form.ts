import { ChallengeAnswerForm } from './challenge-answer.form';
import { ChallengedQuestionViewModel } from '@services/challenge/view-models/challenged-question.view-model';
import { ChallengeQuestionResultModel } from '@services/challenge/result-models/challenge-question.result-model';
import { ChallengeTestForm } from './challenge-test.form';
import
{
	FormArray,
	FormControl
} from '@angular/forms';
import { FormBase } from '@base/form.base';

export class ChallengeQuestionForm extends FormBase<ChallengedQuestionViewModel>
{
	public readonly model: ChallengeQuestionResultModel;

	public constructor(questionModel: ChallengeQuestionResultModel, parent: ChallengeTestForm)
	{
		super({
			sourceQuestionId: new FormControl(questionModel.id),
			answers: new FormArray([])
		});

		this.setParent(parent);

		questionModel.answers.forEach(a => this.answers.push(new ChallengeAnswerForm(a, this)));

		this.model = questionModel;
	}

	public get answers(): FormArray
	{
		return this.getArray('answers');
	}
}