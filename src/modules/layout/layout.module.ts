import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { SignModule } from 'src/modules/sign/sign.module';

@NgModule({
	declarations: [
		MenuComponent,
		HeaderComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		SignModule
	],
	exports: [
		HeaderComponent,
		MenuComponent
	]
})
export class LayoutModule { }
