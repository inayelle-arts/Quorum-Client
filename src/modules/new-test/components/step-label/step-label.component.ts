import { Component, Input } from '@angular/core';

@Component({
	selector: 'q-step-label',
	templateUrl: './step-label.component.html',
	styleUrls: ['../../styles/new-test.styles.scss']
})
export class StepLabelComponent
{
	@Input()
	public readonly label: string;
}
