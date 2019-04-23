import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PathMatch } from 'src/enums/path-match.enum';
import { NewTestModule } from '../new-test/new-test.module';
import
{
	RouterModule,
	Routes
} from '@angular/router';

const routes: Routes = [
	{
		path: 'new',
		loadChildren: () => NewTestModule
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
