import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'q-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent
{
	public readonly url: string;

	public constructor(router: Router)
	{
		this.url = router.url;
	}
}
