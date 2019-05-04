import { FormGroup, FormControl, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';

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

	protected control(value?: any, ...validators: ValidatorFn[]): FormControl
	{
		return new FormControl(value, validators);
	}

	protected array(controls: AbstractControl[] = [], ...validators: ValidatorFn[]): FormArray
	{
		return new FormArray(controls, validators);
	}

	protected group(controls: { [key: string]: AbstractControl }, ...validators: ValidatorFn[]): FormGroup
	{
		return new FormGroup(controls, validators);
	}

	private _get<T extends AbstractControl>(name: string): T
	{
		return this.controls[name] as T;
	}
}