import { UserInfo } from './user.info';
import { Injectable } from '@angular/core';
import { Token } from './token';

@Injectable()
export class UserService
{
	private static readonly StorageKey: string = "token";

	private _token: Token;

	public constructor()
	{
		const rawToken = localStorage.getItem(UserService.StorageKey);

		if (rawToken)
		{
			this.store(rawToken);
		}
		else
		{
			this._token = null;
		}
	}

	public store(tokenString: string): void
	{
		this._token = new Token(tokenString);

		localStorage.setItem(UserService.StorageKey, tokenString);
	}

	public unstore(): void
	{
		localStorage.removeItem(UserService.StorageKey);
		this._token = null;
	}

	public get rawToken(): string
	{
		return this._token.raw;
	}

	public get current(): UserInfo
	{
		if (this.loggedIn)
		{
			return this._token.userInfo;
		}

		return null;
	}

	public get loggedIn(): boolean
	{
		return this._token != null;
	}
}