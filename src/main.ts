import { enableProdMode } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootModule } from 'src/modules/root/root.module';
import 'hammerjs';

if (environment.production)
{
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RootModule)
	.catch(err => console.error(err));
