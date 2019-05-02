import { CommonModule } from '@angular/common';
import
{
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NewTestComponent } from './components/new-test/new-test.component';
import { NewTestRouting } from './new-test.routing';
import { NgModule } from '@angular/core';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { StepLabelComponent } from './components/step-label/step-label.component';
import { NewQuestionComponent } from './components/new-question/new-question.component';
import { NewAnswerComponent } from './components/new-answer/new-answer.component';
import { LeaveConfirmDialogModule } from '../leave-confirm-dialog/leave-confirm-dialog.module';
import { TestService } from '@services/new-test.service';
import { GuardsModule } from 'src/guards/guards.module';

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