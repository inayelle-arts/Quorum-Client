import { ClipboardService } from '@services/clipboard/clipboard.service';
import
{
	Component,
	Input
} from '@angular/core';
import { ComponentBase } from '@base/component.base';
import { NotificationService } from '@services/notification/notification.service';
import { TestPreviewResultModel } from '@services/test/result-models/test-preview.result-model';
import { Router } from '@angular/router';

@Component({
	selector: 'q-test-preview',
	templateUrl: './test-preview.component.html',
	styleUrls: ['./test-preview.component.scss']
})
export class TestPreviewComponent extends ComponentBase
{
	private readonly _notifyService: NotificationService;
	private readonly _clipboardService: ClipboardService;
	private readonly _router: Router;

	@Input()
	public readonly preview: TestPreviewResultModel;

	public constructor(notifyService: NotificationService, clipboardService: ClipboardService, router: Router)
	{
		super();
		this._notifyService = notifyService;
		this._clipboardService = clipboardService;
		this._router = router;
	}

	public onClick(): void
	{
		this.onShareClick();
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
}
