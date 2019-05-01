import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { SignModule } from '@modules/sign/sign.module';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '@services/services.module';

@NgModule({
	declarations: [
		MenuComponent,
		HeaderComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		SignModule,
		RouterModule,
		ServicesModule
	],
	exports: [
		HeaderComponent,
		MenuComponent
	]
})
export class LayoutModule { }
