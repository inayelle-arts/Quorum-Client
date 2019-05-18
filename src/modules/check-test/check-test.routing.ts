import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckTestComponent } from './components/check-test/check-test.component';
import { PathMatch } from '@enums/path-match.enum';
import { UserOnlyGuard } from '@guards/user-only.guard';

const routes: Routes =
	[
		{
			path: ':id',
			component: CheckTestComponent,
			pathMatch: PathMatch.Full,
			canActivate: [UserOnlyGuard]
		}
	];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class CheckTestRouting { }