import { NgModule } from '@angular/core';
import { TestService } from '@services/test.service';

@NgModule({
	providers: [
		TestService
	]
})
export class ServicesModule { }