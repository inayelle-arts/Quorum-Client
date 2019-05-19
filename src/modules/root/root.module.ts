import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import
{
	ErrorStateMatcher,
	ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { GuardsModule } from '@guards/guards.module';
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
		InterceptorsModule,
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
