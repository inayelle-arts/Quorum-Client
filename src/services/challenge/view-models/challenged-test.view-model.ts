import {ChallengedQuestionViewModel} from './challenged-question.view-model';

export interface ChallengedTestViewModel
{
	id: number;
	challengedAt: string;
	questions: ChallengedQuestionViewModel[];
}