import {CheckQuestionResultModel} from '@services/check/result-models/check-question.result-model';

export interface CheckTestResultModel
{
	name: string;
	userEmail: string;
	maximumScore: number;
	userScore: number;
	challengedAt: string;
	questions: CheckQuestionResultModel[];
}