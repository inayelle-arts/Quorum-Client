export class ClipboardService
{
	public copy(text: string): void
	{
		const copyInput = document.createElement('input');
		document.documentElement.appendChild(copyInput);

		copyInput.value = text;
		copyInput.select();

		document.execCommand('copy', false);

		copyInput.remove();
	}
}