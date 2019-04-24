import { FormBase } from '@base/form.base';
import { NewTestViewModel } from '../view-models/new-test.view-model';
import { FormControl, Validators, FormArray } from '@angular/forms';
import { NewQuestionForm } from '@modules/new-test/forms/new-question.form';

export class NewTestForm extends FormBase<NewTestViewModel>
{
	public constructor()
	{
		super({
			name: new FormControl('', Validators.required),
			description: new FormControl(''),
			tags: new FormArray([]),
			questions: new FormArray([])
		});
	}

	public get name(): FormControl
	{
		return this.getControl('name');
	}

	public get description(): FormControl
	{
		return this.getControl('description');
	}

	public get tags(): FormArray
	{
		return this.getArray('tags');
	}

	public get questions(): FormArray
	{
		return this.getArray('questions');
	}

	public addTag(tag: string): void
	{
		if (!this.tags.controls.some(c => c.value == tag))
		{
			this.tags.push(new FormControl(tag));
		}
	}

	public removeTag(tag: string): void
	{
		const removable = this.tags.controls.filter(c => c.value == tag)[0];

		const index = this.tags.controls.indexOf(removable);

		this.tags.removeAt(index);
	}

	public addQuestion(): void
	{
		const question = new NewQuestionForm(this);

		question.addAnswer();
		question.addAnswer();

		this.questions.push(question);
	}

	public removeQuestion(index: number): void
	{
		this.questions.removeAt(index);
	}
}