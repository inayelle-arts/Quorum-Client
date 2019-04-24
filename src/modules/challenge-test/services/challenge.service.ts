import { HttpServiceBase } from '@base/http-service.base';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChallengeTestResultModel } from '@modules/challenge-test/result-models/challenge-test.result-model';
import { ChallengedTestViewModel } from '@modules/challenge-test/view-models/challenged-test.view-model';
import { ChallengeResultModel } from '@modules/challenge-test/result-models/challenge-result-model';

@Injectable()
export class ChallengeService extends HttpServiceBase
{
	private readonly _url: string = "api/pass";

	public getTestForChallenge(id: number): Observable<ChallengeTestResultModel>
	{
		return this.http.get<ChallengeTestResultModel>(this.combineUrl(this._url, id));
	}

	public challenge(viewModel: ChallengedTestViewModel): Observable<ChallengeResultModel>
	{
		return this.http.post<ChallengeResultModel>(this._url, viewModel);
	}
}