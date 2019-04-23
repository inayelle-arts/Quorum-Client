import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';

@Component({
	selector: 'q-tag-list',
	templateUrl: './tag-list.component.html',
	styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent
{
	@Input()
	public readonly tags: FormArray;

	@Output('onAdd')
	public readonly onTagAdd: EventEmitter<string>;

	@Output('onRemove')
	public readonly onTagRemove: EventEmitter<string>;

	public constructor()
	{
		this.onTagAdd = new EventEmitter<string>();
		this.onTagRemove = new EventEmitter<string>();
	}

	public addTag(event: MatChipInputEvent): void
	{
		const value = event.input.value;
		event.input.value = '';

		this.onTagAdd.emit(value);
	}

	public removeTag(control: AbstractControl): void
	{
		this.onTagRemove.emit(control.value);
	}
}
