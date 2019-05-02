import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathMatch } from '@enums/path-match.enum';
import { UserOnlyGuard } from 'src/guards/user-only.guard';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes =
	[
		{
			path: '',
			pathMatch: PathMatch.Full,
			component: ProfileComponent,
			canActivate: [UserOnlyGuard]
		}
	];

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class ProfileRouting { }