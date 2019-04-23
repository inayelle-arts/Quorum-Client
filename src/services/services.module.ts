import { NgModule } from '@angular/core';
import { TestService } from 'src/services/test.service';

@NgModule({
	providers: [
		TestService
	]
})
export class ServicesModule { }