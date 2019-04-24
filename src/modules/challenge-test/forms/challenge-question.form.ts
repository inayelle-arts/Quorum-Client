import { ChallengedQuestionViewModel } from '../view-models/challenged-question.view-model';
import { FormBase } from '@base/form.base';
import { FormControl, FormArray } from '@angular/forms';
import { ChallengeTestForm } from './challenge-test.form';
import { ChallengeQuestionResultModel } from '@modules/challenge-test/result-models/challenge-question.result-model';
import { ChallengeAnswerForm } from './challenge-answer.form';

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