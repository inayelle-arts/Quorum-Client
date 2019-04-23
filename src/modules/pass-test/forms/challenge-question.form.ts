import { ChallengedQuestionViewModel } from '../view-models/challenged-question.view-model';
import { FormBase } from 'src/base/form.base';
import { FormControl, FormArray } from '@angular/forms';
import { ChallengeTestForm } from './challenge-test.form';
import { ChallengeQuestionResultModel } from 'src/modules/pass-test/result-models/challenge-question.result-model';
import { ChallengeAnswerForm } from './challenge-answer.form';

export class ChallengeQuestionForm extends FormBase<ChallengedQuestionViewModel>
{
	public readonly questionModel: ChallengeQuestionResultModel;

	public constructor(questionModel: ChallengeQuestionResultModel, parent: ChallengeTestForm)
	{
		super({
			id: new FormControl(questionModel.id),
			answers: new FormArray([])
		});

		this.setParent(parent);

		questionModel.answers.forEach(a => this.answers.push(new ChallengeAnswerForm(a, this)));

		this.questionModel = questionModel;
	}

	public get answers(): FormArray
	{
		return this.getArray('answers');
	}
}