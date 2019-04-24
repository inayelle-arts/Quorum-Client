import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService
{
	private readonly _notifier: MatSnackBar;

	public constructor(notifier: MatSnackBar)
	{
		this._notifier = notifier;
	}

	public notify(message: string, action: string = 'Dismiss'): void
	{
		this._notifier.open(message, action);
	}
}