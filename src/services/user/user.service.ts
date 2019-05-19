import { Injectable } from '@angular/core';
import { NotificationService } from '@services/notification/notification.service';
import { JwtToken } from './jwt/jwt-token';
import { JwtPayload } from './jwt/jwt-payload';

@Injectable()
export class UserService
{
	private static readonly StorageKey: string = "token";

	private readonly _notifyService: NotificationService;

	private _token: JwtToken = null;

	public constructor(notifyService: NotificationService)
	{
		this._notifyService = notifyService;

		this._restoreUser();
	}

	public store(token: string | JwtToken): void
	{
		if (token instanceof JwtToken)
		{
			this._token = token;
		}
		else
		{
			this._token = new JwtToken(token);
		}

		localStorage.setItem(UserService.StorageKey, this._token.raw);
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

	public get current(): JwtPayload
	{
		if (this.loggedIn)
		{
			return this._token.payload;
		}

		return null;
	}

	public get loggedIn(): boolean
	{
		if (this._token && this._token.isExpired())
		{
			this._notifyService.notify('Session expired. Please, relogin.');
			this.unstore();
		}

		return this._token != null;
	}

	private _restoreUser(): void
	{
		const rawToken = localStorage.getItem(UserService.StorageKey);

		if (rawToken)
		{
			const token = new JwtToken(rawToken);

			if (token.isExpired())
			{
				return;
			}
			else
			{
				this.store(token);
			}
		}
	}
}