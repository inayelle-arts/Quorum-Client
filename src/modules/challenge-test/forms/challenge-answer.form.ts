import { ChallengeAnswerResultModel } from '@services/challenge/result-models/challenge-answer.result-model';
import { ChallengedAnswerViewModel } from '@services/challenge/view-models/challenged-answer.view-model';
import { ChallengeQuestionForm } from './challenge-question.form';
import { FormBase } from '@base/form.base';
import { FormControl } from '@angular/forms';

export class ChallengeAnswerForm extends FormBase<ChallengedAnswerViewModel>
{
	public readonly model: ChallengeAnswerResultModel;

	public constructor(answerModel: ChallengeAnswerResultModel, parent: ChallengeQuestionForm)
	{
		super({
			sourceAnswerId: new FormControl(answerModel.id),
			isCorrect: new FormControl(false)
		});

		this.setParent(parent);

		this.model = answerModel;
	}

	public get isCorrect(): FormControl
	{
		return this.getControl('isCorrect');
	}
}