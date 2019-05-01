import { NgModule } from '@angular/core';
import { UserOnlyGuard } from './user-only.guard';
import { ServicesModule } from '@services/services.module';

@NgModule({
	providers: [
		UserOnlyGuard
	],
	imports: [
		ServicesModule
	]
})
export class GuardsModule { }