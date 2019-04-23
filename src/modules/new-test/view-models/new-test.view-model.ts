import { NewQuestionViewModel } from './new-question.view-model';

export interface NewTestViewModel
{
	name: string;
	description: string;
	tags: string[];
	questions: NewQuestionViewModel[];
}