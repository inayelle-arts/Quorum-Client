import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './components/root/root.component';
import { RootRouting } from './root.routing';

@NgModule({
	declarations: [
		RootComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RootRouting
	],
	bootstrap: [
		RootComponent
	]
})
export class RootModule { }
