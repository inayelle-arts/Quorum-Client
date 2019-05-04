import { NewAnswerViewModel } from './new-answer.view-model';

export interface NewQuestionViewModel
{
	content: string;
	answers: NewAnswerViewModel[];
}