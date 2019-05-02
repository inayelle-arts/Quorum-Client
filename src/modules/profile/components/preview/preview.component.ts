import { Component, Input } from '@angular/core';
import { ChallengeResultPreviewResultModel } from 'src/result-models/challenge-result-preview.result-mode';
import { ComponentBase } from '@base/component.base';
import { Router } from '@angular/router';

@Component({
	selector: 'q-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.scss']
})
export class PreviewComponent extends ComponentBase
{
	private readonly _router: Router;

	@Input()
	public readonly preview: ChallengeResultPreviewResultModel;


	public constructor(router: Router)
	{
		super();
		this._router = router;
	}


	public onClick(): void
	{
		this._router.navigate(['/check', this.preview.id]);
	}
}
