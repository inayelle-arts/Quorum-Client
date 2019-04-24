import { CheckAnswerResultModel } from './check-answer.result-model';

export interface CheckQuestionResultModel
{
	content: string;
	maximumScore: number;
	userScore: number;
	answers: CheckAnswerResultModel[];
}