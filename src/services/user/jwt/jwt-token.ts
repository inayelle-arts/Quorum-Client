import { JwtPayload } from './jwt-payload';

export class JwtToken
{
	private _raw: string = null;
	private _payload: JwtPayload = null;

	public constructor(token: string)
	{
		this._raw = token;

		this._deserialize(token);
	}

	public get raw(): string
	{
		return this._raw;
	}

	public get payload(): JwtPayload
	{
		return this._payload;
	}

	public isExpired(): boolean
	{
		const now = new Date(Date.now());
		const expireTime = new Date(this.payload.exp * 1000);

		return expireTime <= now;
	}

	private _deserialize(token: string): void
	{
		const parts = token.split('.');

		this._payload = this._deserializePart<JwtPayload>(parts[1]);
	}

	private _deserializePart<T>(encodedPart: string): T
	{
		return JSON.parse(atob(encodedPart)) as T;
	}
}