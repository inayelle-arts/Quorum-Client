import { NgModule } from '@angular/core';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true
		}
	]
})
export class InterceptorsModule { }