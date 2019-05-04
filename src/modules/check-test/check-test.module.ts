import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckTestComponent } from './components/check-test/check-test.component';
import { CheckTestRouting } from '@modules/check-test/check-test.routing';
import { MaterialModule } from '@modules/material/material.module';
import { CheckTestService } from '@services/check/check-test.service';

@NgModule({
	declarations: [
		CheckTestComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		CheckTestRouting
	],
	providers: [
		CheckTestService
	]
})
export class CheckTestModule { }
