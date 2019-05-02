import { Component, Input } from '@angular/core';
import { TestPreviewResultModel } from 'src/result-models/test-preview.result-model';
import { NotificationService } from '@services/notification.service';
import { ComponentBase } from '@base/component.base';
import { ClipboardService } from '@services/clipboard.service';

@Component({
	selector: 'q-test-preview',
	templateUrl: './test-preview.component.html',
	styleUrls: ['./test-preview.component.scss']
})
export class TestPreviewComponent extends ComponentBase
{
	private readonly _notifyService: NotificationService;
	private readonly _clipboardService: ClipboardService;

	@Input()
	public readonly preview: TestPreviewResultModel;

	public constructor(notifyService: NotificationService, clipboardService: ClipboardService)
	{
		super();
		this._notifyService = notifyService;
		this._clipboardService = clipboardService;
	}

	public onClick(): void
	{
		const link = `http://localhost:4200/pass/${this.preview.id}`;

		this._clipboardService.copy(link);

		this._notifyService.notify('Link copied to clipboard!');
	}
}
