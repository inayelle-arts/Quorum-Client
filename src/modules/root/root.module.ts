import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from 'src/modules/layout/layout.module';
import { NgModule } from '@angular/core';
import { RootComponent } from './components/root/root.component';
import { RootRouting } from './root.routing';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	bootstrap: [
		RootComponent
	],
	declarations: [
		RootComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		LayoutModule,
		RootRouting
	],
	providers: [
		{
			provide: ErrorStateMatcher,
			useClass: ShowOnDirtyErrorStateMatcher
		}
	]
})
export class RootModule { }
