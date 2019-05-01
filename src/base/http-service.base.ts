import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '@services/user/user.service';

@Injectable()
export abstract class HttpServiceBase
{
	private readonly _httpClient: HttpClient;
	private readonly _userService: UserService;

	public constructor(httpClient: HttpClient, userService: UserService)
	{
		this._httpClient = httpClient;
		this._userService = userService;
	}

	protected get http(): HttpClient
	{
		return this._httpClient;
	}

	protected combineUrl(...args: any[]): string
	{
		return args.join('/');
	}

	protected get authHeaders(): HttpHeaders
	{
		const token = this._userService.rawToken;

		const headers = new HttpHeaders();

		if (!token)
		{
			return headers;
		}

		const bearer = `Bearer ${token}`;
		return headers.set('Authorization', bearer);
	}
}