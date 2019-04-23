import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassTestComponent } from './components/pass-test/pass-test.component';
import { PassTestRouting } from './pass-test.routing';
import { LeaveConfirmDialogModule } from '../leave-confirm-dialog/leave-confirm-dialog.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/modules/material/material.module';
import { ServicesModule } from 'src/services/services.module';
import { PassQuestionComponent } from './components/pass-question/pass-question.component';
import { PassAnswerComponent } from './components/pass-answer/pass-answer.component';

@NgModule({
	declarations: [
		PassTestComponent,
		PassQuestionComponent,
		PassAnswerComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		LeaveConfirmDialogModule,
		ServicesModule,
		PassTestRouting,
	],
	exports: [
		PassTestComponent,
		PassQuestionComponent,
		PassAnswerComponent
	]
})
export class PassTestModule { }
