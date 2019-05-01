export interface HttpResult<T>
{
	ok: boolean;
	message: string;
	data: T;
}