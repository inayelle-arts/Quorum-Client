import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NewAnswerForm } from '../../forms/new-answer.form';

@Component({
	selector: 'q-new-answer',
	templateUrl: './new-answer.component.html',
	styleUrls: [
		'../../styles/new-test.styles.scss',
		'./new-answer.component.scss'
	]
})
export class NewAnswerComponent
{
	@Input()
	public readonly form: NewAnswerForm;

	@Input()
	public readonly index: number;

	@Output()
	public onRemoveClick: EventEmitter<number>;

	public constructor()
	{
		this.onRemoveClick = new EventEmitter<number>();
	}

	public remove(): void
	{
		this.onRemoveClick.emit(this.index);
	}
}
