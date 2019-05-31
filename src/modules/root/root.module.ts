import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import
{
	ErrorStateMatcher,
	ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {MaterialModule} from "@modules/material/material.module";
import {CookieService} from "ngx-cookie-service";
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@modules/layout/layout.module';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RootComponent } from './components/root/root.component';
import { RootRouting } from './root.routing';
import { InterceptorsModule } from 'src/interceptors/interceptors.module';

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
		MaterialModule,
		InterceptorsModule,
		LayoutModule,
		RootRouting
	],
	providers: [
		CookieService,
		{
			provide: ErrorStateMatcher,
			useClass: ShowOnDirtyErrorStateMatcher
		}
	]
})
export class RootModule { }
