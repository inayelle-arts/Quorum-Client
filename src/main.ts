import {enableProdMode} from '@angular/core';
import {environment} from '@env/environment';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RootModule} from '@modules/root/root.module';
import 'hammerjs';

if (environment.production)
{
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RootModule)
	.catch(err => console.error(err));
