import { CommonModule } from '@angular/common';
import
{
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';
import { GuardsModule } from 'src/guards/guards.module';
import { LeaveConfirmDialogModule } from '@modules/leave-confirm-dialog/leave-confirm-dialog.module';
import { MaterialModule } from '@modules/material/material.module';
import { NewAnswerComponent } from './components/new-answer/new-answer.component';
import { NewQuestionComponent } from './components/new-question/new-question.component';
import { NewTestComponent } from './components/new-test/new-test.component';
import { NewTestRouting } from './new-test.routing';
import { NgModule } from '@angular/core';
import { StepLabelComponent } from './components/step-label/step-label.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TestService } from '@services/test/test.service';

@NgModule({
	declarations: [
		TagListComponent,
		StepLabelComponent,
		NewTestComponent,
		NewQuestionComponent,
		NewAnswerComponent,
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		GuardsModule,
		NewTestRouting,
		LeaveConfirmDialogModule
	],
	providers: [
		TestService
	]
})
export class NewTestModule { }