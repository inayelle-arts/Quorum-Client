import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class HttpServiceBase
{
	private readonly _httpClient: HttpClient;

	public constructor(httpClient: HttpClient)
	{
		this._httpClient = httpClient;
	}

	protected get http(): HttpClient
	{
		return this._httpClient;
	}

	protected combineUrl(...args: any[]): string
	{
		return args.join('/');
	}
}