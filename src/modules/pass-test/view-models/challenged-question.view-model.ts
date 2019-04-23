import { ChallengedAnswerViewModel } from './challenged-answer.view-model';

export interface ChallengedQuestionViewModel
{
	id: number;
	answers: ChallengedAnswerViewModel[];
}