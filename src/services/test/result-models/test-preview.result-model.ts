export interface TestPreviewResultModel
{
	id: number;

	name: string;
	description: string;

	questionsCount: number;
	tags: string[];
	
	shuffleQuestions: boolean;
	
	createdAt : Date;
}