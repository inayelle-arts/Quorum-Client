import {NewQuestionViewModel} from '@services/test/view-models/new-question.view-model';

export interface NewTestViewModel
{
	name: string;
	description: string;
	tags: string[];
	questions: NewQuestionViewModel[];
	createdAt: Date;
}