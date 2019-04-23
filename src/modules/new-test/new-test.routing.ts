import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTestComponent } from './components/new-test/new-test.component';
import { PathMatch } from '../../enums/path-match.enum';
import { LeaveUnsavedDataGuard } from 'src/modules/leave-confirm-dialog/guard/leave-unsaved-data.guard';
import { LeaveConfirmDialogModule } from 'src/modules/leave-confirm-dialog/leave-confirm-dialog.module';

const routes: Routes =
	[
		{
			path: '',
			component: NewTestComponent,
			pathMatch: PathMatch.Full,
			canDeactivate: [LeaveUnsavedDataGuard]
		}
	];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LeaveConfirmDialogModule
	]
})
export class NewTestRouting { }