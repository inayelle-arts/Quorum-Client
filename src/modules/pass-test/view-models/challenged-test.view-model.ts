import { ChallengedQuestionViewModel } from './challenged-question.view-model';

export interface ChallengedTestViewModel
{
	id: number;
	questions: ChallengedQuestionViewModel[];
}