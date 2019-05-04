import { HttpServiceBase } from '@base/http-service.base';
import { Injectable } from '@angular/core';
import { SignInViewModel } from './view-models/sign-in.view-model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { SignUpViewModel } from './view-models/sign-up.view-model';
import { SignResultModel } from './result-models/sign.result-model';

@Injectable()
export class SignService extends HttpServiceBase
{
	private readonly _url: string = '/api/sign';

	public signIn(userData: SignInViewModel): Observable<SignResultModel>
	{
		return this.http.post<SignResultModel>(this.combineUrl(this._url, 'in'), userData);
	}

	public signUp(userData: SignUpViewModel): Observable<SignResultModel>
	{
		return this.http.post<SignResultModel>(this.combineUrl(this._url, 'up'), userData);
	}
}