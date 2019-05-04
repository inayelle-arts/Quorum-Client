import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '@modules/material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '@services/services.module';
import { SignModule } from '@modules/sign/sign.module';

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
