import { HttpServiceBase } from '@base/http-service.base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChallengeTestResultModel } from '../modules/challenge-test/result-models/challenge-test.result-model';
import { ChallengeQuestionResultModel } from '../modules/challenge-test/result-models/challenge-question.result-model';

@Injectable()
export class TestService extends HttpServiceBase
{
	public getTestForChallenge(id: number): Observable<ChallengeTestResultModel>
	{
		const questions: ChallengeQuestionResultModel[] =
			[
				{
					id: 1,
					content: 'Q1',
					answers: [
						{
							id: 1,
							content: 'A1'
						},
						{
							id: 2,
							content: 'A2'
						}
					]
				},
				{
					id: 2,
					content: 'Q2',
					answers: [
						{
							id: 3,
							content: 'A3'
						},
						{
							id: 4,
							content: 'A4'
						}
					]
				},
			];

		const test: ChallengeTestResultModel =
		{
			id: id,
			name: 'test',
			questions: questions
		};

		return of(test);
	}
}