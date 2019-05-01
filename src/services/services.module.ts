import { NgModule } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { UserService } from './user/user.service';

@NgModule({
	providers: [
		NotificationService,
		UserService
	]
})
export class ServicesModule { }