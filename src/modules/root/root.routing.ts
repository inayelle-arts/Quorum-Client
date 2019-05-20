import { ChallengeTestModule } from '@modules/challenge-test/challenge-test.module';
import { CheckTestModule } from '@modules/check-test/check-test.module';
import { HomeComponent } from './components/home/home.component';
import { MyTestsModule } from '@modules/my-tests/my-tests.module';
import { NewTestModule } from '@modules/new-test/new-test.module';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PathMatch } from '@enums/path-match.enum';
import { ProfileModule } from '@modules/profile/profile.module';
import
{
	RouterModule,
	Routes
} from '@angular/router';

const routes: Routes = [
	{
		path: 'my-tests',
		loadChildren: () => MyTestsModule
	},
	{
		path: 'results',
		loadChildren: () => ProfileModule
	},
	{
		path: 'new',
		loadChildren: () => NewTestModule
	},
	{
		path: 'pass',
		loadChildren: () => ChallengeTestModule
	},
	{
		path: 'check',
		loadChildren: () => CheckTestModule
	},
	{
		path: '',
		component: HomeComponent,
		pathMatch: PathMatch.Full
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class RootRouting { }
