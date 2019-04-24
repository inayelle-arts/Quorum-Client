import { CheckAnswerResultModel } from './check-answer.result-model';

export interface CheckQuestionResultModel
{
	content: string;
	answers: CheckAnswerResultModel[];
}