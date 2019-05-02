import { NgModule } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { UserService } from './user/user.service';
import { ChallengeService } from './challenge.service';
import { CheckTestService } from './check-test.service';
import { TestService } from './new-test.service';
import { ClipboardService } from './clipboard.service';

@NgModule({
	providers: [
		NotificationService,
		ClipboardService,
		UserService,
		ChallengeService,
		CheckTestService,
		TestService,
	]
})
export class ServicesModule { }