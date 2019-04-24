import { CommonModule } from '@angular/common';
import { LeaveConfirmDialogComponent }
	from '@modules/leave-confirm-dialog/components/leave-confirm-dialog/leave-confirm-dialog.component';
import { LeaveUnsavedDataGuard } from './guard/leave-unsaved-data.guard';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@modules/material/material.module';

@NgModule({
	declarations: [
		LeaveConfirmDialogComponent
	],
	imports: [
		CommonModule,
		MaterialModule
	],
	providers: [
		LeaveUnsavedDataGuard
	],
	entryComponents: [
		LeaveConfirmDialogComponent
	]
})
export class LeaveConfirmDialogModule { }
