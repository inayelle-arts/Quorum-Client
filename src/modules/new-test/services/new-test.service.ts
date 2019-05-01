import { HttpServiceBase } from '@base/http-service.base';
import { Injectable } from '@angular/core';
import { NewTestViewModel } from '@modules/new-test/view-models/new-test.view-model';
import { Observable } from 'rxjs';

@Injectable()
export class NewTestService extends HttpServiceBase
{
	private readonly _url: string = "/api/create";

	public createTest(viewModel: NewTestViewModel): Observable<any>
	{
		const headers = this.authHeaders;

		console.log(headers);

		return this.http.post(this._url, viewModel, { headers: this.authHeaders });
	}
}