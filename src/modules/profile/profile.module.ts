import { CommonModule } from '@angular/common';
import { GuardsModule } from 'src/guards/guards.module';
import { MaterialModule } from '@modules/material/material.module';
import { NgModule } from '@angular/core';
import { PreviewComponent } from './components/preview/preview.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRouting } from './profile.routing';

@NgModule({
	declarations: [ProfileComponent, PreviewComponent],
	imports: [
		CommonModule,
		GuardsModule,
		MaterialModule,
		ProfileRouting
	]
})
export class ProfileModule { }