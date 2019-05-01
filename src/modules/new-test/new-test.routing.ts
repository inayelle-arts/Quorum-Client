import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTestComponent } from './components/new-test/new-test.component';
import { PathMatch } from '../../enums/path-match.enum';
import { LeaveUnsavedDataGuard } from '@modules/leave-confirm-dialog/guard/leave-unsaved-data.guard';
import { UserOnlyGuard } from 'src/guards/user-only.guard';

const routes: Routes =
	[
		{
			path: '',
			component: NewTestComponent,
			pathMatch: PathMatch.Full,
			canActivate: [UserOnlyGuard],
			canDeactivate: [LeaveUnsavedDataGuard]
		}
	];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class NewTestRouting { }