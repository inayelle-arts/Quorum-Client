import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckTestComponent } from './components/check-test/check-test.component';

const routes: Routes =
	[
		{
			path: ':id',
			component: CheckTestComponent
		}
	];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class CheckTestRouting { }