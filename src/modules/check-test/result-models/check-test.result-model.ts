import { CheckQuestionResultModel } from '@modules/check-test/result-models/check-question.result-model';

export interface CheckTestResultModel
{
	name: string;
	// date: string;
	maximumScore: number;
	userScore: number;
	questions: CheckQuestionResultModel[];
}