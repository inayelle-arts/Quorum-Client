import { FormBase } from 'src/base/form.base';
import { ChallengedAnswerViewModel } from '../view-models/challenged-answer.view-model';
import { FormControl } from '@angular/forms';
import { ChallengeQuestionForm } from './challenge-question.form';
import { ChallengeAnswerResultModel } from '../result-models/challenge-answer.result-model';

export class ChallengeAnswerForm extends FormBase<ChallengedAnswerViewModel>
{
	public readonly answerModel: ChallengeAnswerResultModel;

	public constructor(answerModel: ChallengeAnswerResultModel, parent: ChallengeQuestionForm)
	{
		super({
			id: new FormControl(answerModel.id),
			isCorrect: new FormControl(false)
		});

		this.setParent(parent);

		this.answerModel = answerModel;
	}

	public get isCorrect(): FormControl
	{
		return this.getControl('isCorrect');
	}
}