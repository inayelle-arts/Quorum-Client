import { HttpServiceBase } from '@base/http-service.base';
import { Injectable } from '@angular/core';
import { NewTestViewModel } from '@services/test/view-models/new-test.view-model';
import { Observable } from 'rxjs';
import { TestPreviewResultModel } from '@services/test/result-models/test-preview.result-model';

@Injectable()
export class TestService extends HttpServiceBase
{
	private readonly _url: string = "/api/test";

	public createTest(viewModel: NewTestViewModel): Observable<number>
	{
		return this.http.post<number>(this._url, viewModel, { headers: this.authHeaders });
	}

	public getOwnTests(): Observable<TestPreviewResultModel[]>
	{
		return this.http.get<TestPreviewResultModel[]>(this._url, { headers: this.authHeaders });
	}
}