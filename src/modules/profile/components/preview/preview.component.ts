import { Component, Input } from '@angular/core';
import { ChallengeResultPreviewResultModel } from '@services/challenge/result-models/challenge-result-preview.result-mode';
import { ComponentBase } from '@base/component.base';
import { Router } from '@angular/router';
import { ClipboardService } from '@services/clipboard/clipboard.service';
import { NotificationService } from '@services/notification/notification.service';

@Component({
	selector: 'q-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.scss']
})
export class PreviewComponent extends ComponentBase
{
	private readonly _router: Router;
	private readonly _clipboardService: ClipboardService;
	private readonly _notifyService: NotificationService;

	@Input()
	public readonly preview: ChallengeResultPreviewResultModel;


	public constructor(router: Router, clipboardService: ClipboardService, notifyService: NotificationService)
	{
		super();
		this._router = router;
		this._clipboardService = clipboardService;
		this._notifyService = notifyService;
	}

	public onViewClick(): void
	{
		this._router.navigate(['/check', this.preview.id]);
	}

	public onShareClick(): void
	{
		const link = `${window.location.host}/check/${this.preview.id}`;

		this._clipboardService.copy(link);

		this._notifyService.notify('Link copied to clipboard!');
	}
}
