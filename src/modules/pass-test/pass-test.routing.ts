import { LeaveUnsavedDataGuard } from 'src/modules/leave-confirm-dialog/guard/leave-unsaved-data.guard';
import { NgModule } from '@angular/core';
import { PassTestComponent } from './components/pass-test/pass-test.component';
import { PathMatch } from 'src/enums/path-match.enum';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
	[
		{
			path: ':id',
			component: PassTestComponent,
			pathMatch: PathMatch.Full,
			canDeactivate: [LeaveUnsavedDataGuard]
		},
		{
			path: '**',
			redirectTo: '/'
		}
	];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class PassTestRouting { }