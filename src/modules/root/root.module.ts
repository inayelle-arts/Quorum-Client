import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from 'src/modules/layout/layout.module';
import { NgModule } from '@angular/core';
import { RootComponent } from './components/root/root.component';
import { RootRouting } from './root.routing';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewTestModule } from '../new-test/new-test.module';
import { PassTestModule } from '../pass-test/pass-test.module';

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
		PassTestModule
	],
	providers: [
		{
			provide: ErrorStateMatcher,
			useClass: ShowOnDirtyErrorStateMatcher
		}
	]
})
export class RootModule { }
