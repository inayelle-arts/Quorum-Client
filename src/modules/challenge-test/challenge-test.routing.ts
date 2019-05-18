import { LeaveUnsavedDataGuard } from '@modules/leave-confirm-dialog/guard/leave-unsaved-data.guard';
import { NgModule } from '@angular/core';
import { ChallengeTestComponent } from './components/challenge-test/challenge-test.component';
import { PathMatch } from '@enums/path-match.enum';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
	[
		{
			path: ':id',
			component: ChallengeTestComponent,
			pathMatch: PathMatch.Full,
			canDeactivate: [LeaveUnsavedDataGuard]
		}
	];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class ChallengeTestRouting { }