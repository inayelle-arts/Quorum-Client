import { HttpServiceBase } from '@base/http-service.base';
import { Observable, of } from 'rxjs';
import { CheckTestResultModel } from '@modules/check-test/result-models/check-test.result-model';
import { CheckQuestionResultModel } from '@modules/check-test/result-models/check-question.result-model';

export class CheckTestService extends HttpServiceBase
{
	public getTestResults(id: number): Observable<CheckTestResultModel>
	{
		const questions: CheckQuestionResultModel[] =
			[
				{
					content: "Topkek?",
					answers: [
						{
							content: "topkek",
							isCorrect: true,
							isUserCorrect: true
						},
						{
							content: "ne topkek",
							isCorrect: false,
							isUserCorrect: false
						}
					]
				},
				{
					content: "pivo?",
					answers: [
						{
							content: "net",
							isCorrect: true,
							isUserCorrect: true
						},
						{
							content: "da",
							isCorrect: false,
							isUserCorrect: false
						},
						{
							content: "karaganda",
							isCorrect: false,
							isUserCorrect: true
						}
					]
				}
			];

		const test: CheckTestResultModel =
		{
			name: "HEHE",
			date: Date.now().toString(),
			questions: questions
		};

		return of(test);
	}
}