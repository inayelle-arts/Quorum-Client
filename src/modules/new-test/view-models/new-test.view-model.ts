import { NewQuestionViewModel } from '@modules/new-test/view-models/new-question.view-model';

export interface NewTestViewModel
{
	name: string;
	description: string;
	tags: string[];
	questions: NewQuestionViewModel[];
}