import
{
	Component,
	OnInit
} from '@angular/core';
import {ComponentBase} from '@base/component.base';
import {TestPreviewResultModel} from '@services/test/result-models/test-preview.result-model';
import {TestService} from '@services/test/test.service';
import {NotificationService} from "@services/notification/notification.service";

@Component({
	selector: 'q-my-tests',
	templateUrl: './my-tests.component.html',
	styleUrls: ['./my-tests.component.scss']
})
export class MyTestsComponent extends ComponentBase implements OnInit
{
	private readonly _testService: TestService;
	private readonly _notifyService: NotificationService;
	
	private _testPreviews: TestPreviewResultModel[];
	private _isLoaded: boolean = false;
	
	public constructor(testService: TestService, notifyService: NotificationService)
	{
		super();
		this._testService = testService;
		this._notifyService = notifyService;
	}
	
	public get loaded(): boolean
	{
		return this._isLoaded;
	}
	
	public get testPreviews(): TestPreviewResultModel[]
	{
		return this._testPreviews;
	}
	
	public ngOnInit(): void
	{
		this._testService.getOwnTests().subscribe(r =>
		{
			this._testPreviews = r;
			this._isLoaded = true;
		});
	}
	
	public deleteTest(preview: TestPreviewResultModel): void
	{
		this._testService.deleteTest(preview.id).subscribe(x =>
		{
			this._notifyService.notify('Test removed!');
			this._testPreviews = this._testPreviews.filter(t => t.id != preview.id);
		});
	}
}
