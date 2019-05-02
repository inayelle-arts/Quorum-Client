import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChallengeTestModule } from '@modules/challenge-test/challenge-test.module';
import { CheckTestModule } from '@modules/check-test/check-test.module';
import
{
	ErrorStateMatcher,
	ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@modules/layout/layout.module';
import { NewTestModule } from '@modules/new-test/new-test.module';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RootComponent } from './components/root/root.component';
import { RootRouting } from './root.routing';
import { MyTestsModule } from '@modules/my-tests/my-tests.module';

@NgModule({
	bootstrap: [
		RootComponent
	],
	declarations: [
		RootComponent,
		HomeComponent,
		NotFoundComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RootRouting,
		LayoutModule,
		NewTestModule,
		ChallengeTestModule,
		CheckTestModule,
		MyTestsModule
	],
	providers: [
		{
			provide: ErrorStateMatcher,
			useClass: ShowOnDirtyErrorStateMatcher
		}
	]
})
export class RootModule { }
