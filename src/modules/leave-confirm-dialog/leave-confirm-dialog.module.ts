import { CommonModule } from '@angular/common';
import { LeaveConfirmDialogComponent }
	from 'src/modules/leave-confirm-dialog/components/leave-confirm-dialog/leave-confirm-dialog.component';
import { LeaveUnsavedDataGuard } from './guard/leave-unsaved-data.guard';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
		LeaveConfirmDialogComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		LeaveUnsavedDataGuard
	]
})
export class LeaveConfirmDialogModule { }
