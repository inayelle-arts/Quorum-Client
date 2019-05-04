import { NgModule } from '@angular/core';
import { NotificationService } from '@services/notification/notification.service';
import { UserService } from './user/user.service';
import { ChallengeService } from './challenge/challenge.service';
import { CheckTestService } from './check/check-test.service';
import { TestService } from './test/test.service';
import { ClipboardService } from './clipboard/clipboard.service';

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