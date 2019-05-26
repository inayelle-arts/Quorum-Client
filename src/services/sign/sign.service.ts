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
	private readonly _signUpUrl: string = '/api/sign/up';
	private readonly _signInUrl: string = '/identity/sign/in';

	public signIn(userData: SignInViewModel): Observable<SignResultModel>
	{
		return this.http.post<SignResultModel>(this._signInUrl, userData);
	}

	public signUp(userData: SignUpViewModel): Observable<void>
	{
		return this.http.post<void>(this._signUpUrl, userData);
	}
}