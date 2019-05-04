import { ChallengeAnswerComponent } from './components/challenge-answer/challenge-answer.component';
import { ChallengeQuestionComponent } from './components/challenge-question/challenge-question.component';
import { ChallengeTestComponent } from './components/challenge-test/challenge-test.component';
import { ChallengeTestRouting } from './challenge-test.routing';
import { CommonModule } from '@angular/common';
import
{
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';
import { LeaveConfirmDialogModule } from '@modules/leave-confirm-dialog/leave-confirm-dialog.module';
import { MaterialModule } from '@modules/material/material.module';
import { NgModule } from '@angular/core';
import { ServicesModule } from '@services/services.module';

@NgModule({
	declarations: [
		ChallengeTestComponent,
		ChallengeQuestionComponent,
		ChallengeAnswerComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		LeaveConfirmDialogModule,
		ServicesModule,
		ChallengeTestRouting,
	],
	exports: [
		ChallengeTestComponent,
		ChallengeQuestionComponent,
		ChallengeAnswerComponent
	]
})
export class ChallengeTestModule { }
