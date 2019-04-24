import { NgModule } from '@angular/core';
import { TestService } from '@services/test.service';
import { NotificationService } from '@services/notification.service';

@NgModule({
	providers: [
		TestService,
		NotificationService
	]
})
export class ServicesModule { }