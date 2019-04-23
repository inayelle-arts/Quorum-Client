import { Component } from '@angular/core';
import { LeaveConfirmDialogResult } from './leave-confirm-dialog.result';
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'q-leave-confirm-dialog',
	templateUrl: './leave-confirm-dialog.component.html',
	styleUrls: ['./leave-confirm-dialog.component.scss']
})
export class LeaveConfirmDialogComponent
{
	private readonly _dialogRef: MatDialogRef<LeaveConfirmDialogComponent>;
	private readonly _dialogResult: LeaveConfirmDialogResult;

	public constructor(dialogRef: MatDialogRef<LeaveConfirmDialogComponent>)
	{
		this._dialogRef = dialogRef;
		this._dialogResult = { wantToLeave: false };
	}

	public onLeaveClick(): void
	{
		this._dialogResult.wantToLeave = true;
		this._close();
	}

	public onStayClick(): void
	{
		this._dialogResult.wantToLeave = false;
		this._close();
	}

	public ngOnDestroy(): void
	{
		this._close();
	}

	private _close(): void
	{
		this._dialogRef.close(this._dialogResult);
	}
}
