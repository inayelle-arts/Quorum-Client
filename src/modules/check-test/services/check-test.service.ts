import { HttpServiceBase } from '@base/http-service.base';
import { Observable } from 'rxjs';
import { CheckTestResultModel } from '@modules/check-test/result-models/check-test.result-model';

export class CheckTestService extends HttpServiceBase
{
	private readonly _url: string = 'api/result';

	public getTestResults(id: number): Observable<CheckTestResultModel>
	{
		return this.http.get<CheckTestResultModel>(this.combineUrl(this._url, id));
	}
}