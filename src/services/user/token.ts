import { UserInfo } from './user.info';

export class Token
{
	private _raw: string = null;
	private _userInfo: UserInfo = null;

	public constructor(token: string)
	{
		this._raw = token;

		const parts = token.split('.');

		this._userInfo = JSON.parse(atob(parts[1])) as UserInfo;
	}

	public get raw(): string
	{
		return this._raw;
	}

	public get userInfo(): UserInfo
	{
		return this._userInfo;
	}
}