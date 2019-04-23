import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTestComponent } from './components/new-test/new-test.component';
import { PathMatch } from '../../enums/path-match.enum';

const routes: Routes =
	[
		{
			path: '',
			component: NewTestComponent,
			pathMatch: PathMatch.Full
		}
	];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class NewTestRouting { }