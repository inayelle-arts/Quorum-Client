import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRouting } from './profile.routing';
import { ProfileComponent } from './components/profile/profile.component';
import { GuardsModule } from 'src/guards/guards.module';
import { MaterialModule } from '@modules/material/material.module';
import { PreviewComponent } from './components/preview/preview.component';

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
