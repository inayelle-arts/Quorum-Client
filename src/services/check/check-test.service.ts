import { HttpServiceBase } from '@base/http-service.base';
import { Observable, of } from 'rxjs';
import { CheckTestResultModel } from '@services/check/result-models/check-test.result-model';
import { ChallengeResultPreviewResultModel } from '@services/challenge/result-models/challenge-result-preview.result-mode';

export class CheckTestService extends HttpServiceBase
{
	private readonly _url: string = 'api/result';

	public getTestResults(id: number): Observable<CheckTestResultModel>
	{
		return this.http.get<CheckTestResultModel>(this.combineUrl(this._url, id), { headers: this.authHeaders });
	}

	public getChallengeResultsPreview(): Observable<ChallengeResultPreviewResultModel[]>
	{
		return this.http.get<ChallengeResultPreviewResultModel[]>(this.combineUrl(this._url, 'own'),
			{ headers: this.authHeaders });
	}

	public getStudentsChallengeResultsPreview(): Observable<ChallengeResultPreviewResultModel[]>
	{
		return this.http.get<ChallengeResultPreviewResultModel[]>(this.combineUrl(this._url, 'tutor'),
			{ headers: this.authHeaders });
	}
}