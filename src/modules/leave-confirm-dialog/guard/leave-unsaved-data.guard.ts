import { CanDeactivate } from '@angular/router';
import { ComponentBase } from 'src/base/component.base';
import { Injectable } from '@angular/core';
import { LeaveConfirmDialogComponent } from 'src/modules/leave-confirm-dialog/components/leave-confirm-dialog/leave-confirm-dialog.component';
import { LeaveConfirmDialogResult } from '../components/leave-confirm-dialog/leave-confirm-dialog.result';
import { MatDialog } from '@angular/material';

@Injectable()
export class LeaveUnsavedDataGuard implements CanDeactivate<ComponentBase>
{
	private readonly _dialog: MatDialog;

	public constructor(dialog: MatDialog)
	{
		this._dialog = dialog;
	}

	public async canDeactivate(component: ComponentBase): Promise<boolean>
	{
		if (!component.hasUnsavedData)
		{
			return true;
		}

		const dialogRef = this._dialog.open(LeaveConfirmDialogComponent);

		const result = await dialogRef.afterClosed().toPromise() as LeaveConfirmDialogResult;

		return result.wantToLeave;
	}
}
