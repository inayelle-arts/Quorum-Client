import { Component } from '@angular/core';

@Component({
	selector: 'q-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent
{
	public readonly githubLink = 'https://github.com/inayelle-arts/Quorum';
}
