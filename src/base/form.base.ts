import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

export abstract class FormBase<TViewModel> extends FormGroup
{
	public get viewModel(): TViewModel
	{
		return this.value as TViewModel;
	}

	protected getControl(name: string): FormControl
	{
		return this._get<FormControl>(name);
	}

	protected getArray(name: string): FormArray
	{
		return this._get<FormArray>(name);
	}

	protected getGroup(name: string): FormGroup
	{
		return this._get<FormGroup>(name);
	}

	private _get<T extends AbstractControl>(name: string): T
	{
		return this.controls[name] as T;
	}
}