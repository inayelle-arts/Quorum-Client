import {MatCheckboxChange} from "@angular/material";
import {ClipboardService} from '@services/clipboard/clipboard.service';
import
{
	Component, EventEmitter,
	Input, OnInit, Output, ViewChild
} from '@angular/core';
import {ComponentBase} from '@base/component.base';
import {NotificationService} from '@services/notification/notification.service';
import {TestPreviewResultModel} from '@services/test/result-models/test-preview.result-model';
import {Router} from '@angular/router';
import {TestService} from "@services/test/test.service";
import {PatchTestShuffleQuestionsViewModel} from "@services/test/view-models/patch-test-shuffle-questions.view-model";
import {Test} from "tslint";

@Component({
	           selector   : 'q-test-preview',
	           templateUrl: './test-preview.component.html',
	           styleUrls  : ['./test-preview.component.scss']
           })
export class TestPreviewComponent extends ComponentBase
{
	private readonly _notifyService: NotificationService;
	private readonly _clipboardService: ClipboardService;
	private readonly _testService: TestService;
	private readonly _router: Router;

	@Input()
	public readonly preview: TestPreviewResultModel;

	@Output()
	public readonly onDelete: EventEmitter<TestPreviewResultModel> = new EventEmitter<TestPreviewResultModel>();

	public constructor(
		notifyService: NotificationService,
		clipboardService: ClipboardService,
		testService: TestService,
		router: Router)
	{
		super();
		this._notifyService    = notifyService;
		this._clipboardService = clipboardService;
		this._testService      = testService;
		this._router           = router;
	}

	public onShareClick(): void
	{
		const link = `${window.location.host}/pass/${this.preview.id}`;

		this._clipboardService.copy(link);

		this._notifyService.notify('Link copied to clipboard!');
	}

	public onPassClick(): void
	{
		this._router.navigate(['/pass', this.preview.id]);
	}

	public onDeleteClick(): void
	{
		this.onDelete.emit(this.preview);
	}

	public onShuffleClick(event: MatCheckboxChange): void
	{
		event.source.setDisabledState(true);

		const viewModel: PatchTestShuffleQuestionsViewModel = {shuffleQuestions: event.checked};

		this._testService.patchShuffleQuestionToggleState(this.preview.id, viewModel)
		    .subscribe(r =>
		               {
			               event.source.setDisabledState(
				               false);
		               });
	}
}
