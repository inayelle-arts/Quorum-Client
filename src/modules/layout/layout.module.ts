import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { SignModule } from 'src/modules/sign/sign.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		MenuComponent,
		HeaderComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		SignModule,
		RouterModule
	],
	exports: [
		HeaderComponent,
		MenuComponent
	]
})
export class LayoutModule { }
