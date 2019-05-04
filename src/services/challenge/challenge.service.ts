import { ChallengedTestViewModel } from './view-models/challenged-test.view-model';
import { ChallengeResultModel } from './result-models/challenge-result-model';
import { ChallengeTestResultModel } from './result-models/challenge-test.result-model';
import { HttpServiceBase } from '@base/http-service.base';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ChallengeService extends HttpServiceBase
{
	private readonly _url: string = "api/pass";

	public getTestForChallenge(id: number): Observable<ChallengeTestResultModel>
	{
		return this.http.get<ChallengeTestResultModel>(this.combineUrl(this._url, id), { headers: this.authHeaders });
	}

	public challenge(viewModel: ChallengedTestViewModel): Observable<ChallengeResultModel>
	{
		return this.http.post<ChallengeResultModel>(this._url, viewModel, { headers: this.authHeaders });
	}
}