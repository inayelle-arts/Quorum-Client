import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTestsRouting } from './my-tests.routing';
import { MyTestsComponent } from './components/my-tests/my-tests.component';
import { MaterialModule } from '@modules/material/material.module';
import { TestPreviewComponent } from './components/test-preview/test-preview.component';

@NgModule({
	declarations: [MyTestsComponent, TestPreviewComponent],
	imports: [
		CommonModule,
		MaterialModule,
		MyTestsRouting
	]
})
export class MyTestsModule { }
