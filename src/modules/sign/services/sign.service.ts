import { HttpServiceBase } from 'src/base/http-service.base';
import { Injectable } from '@angular/core';
import { SignInViewModel } from '../view-models/sign-in.view-model';
import { Observable } from 'rxjs';

@Injectable()
export class SignService extends HttpServiceBase
{
	private readonly _url: '/api/sign';

	public signIn(userData: SignInViewModel): Observable<any>
	{
		return this.http.post(this.combineUrl(this._url, 'in'), userData);
	}

	public signUp(userData: SignInViewModel): Observable<any>
	{
		return this.http.post(this.combineUrl(this._url, 'up'), userData);
	}
}