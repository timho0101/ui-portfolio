import { NgModule } from '@angular/core';
import { CssGridLayoutComponent } from './css-grid-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CssGridLayoutOneComponent } from './css-grid-layout-one/css-grid-layout-one.component';
import { CssGridLayoutZeroComponent } from './css-grid-layout-zero/css-grid-layout-zero.component';
import { CssGridLayoutTwoComponent } from './css-grid-layout-two/css-grid-layout-two.component';

const routes: Routes = [
	{path: '', component: CssGridLayoutComponent},
	{path: 'cssGridExample0', component: CssGridLayoutZeroComponent},
	{path: 'cssGridExample1', component: CssGridLayoutOneComponent},
	{path: 'cssGridExample2', component: CssGridLayoutTwoComponent}
];

@NgModule({
	imports: [
		MatCardModule,
		RouterModule.forChild(routes)
	],
	exports: [
		CssGridLayoutComponent
	],
	declarations: [
		CssGridLayoutComponent,
		CssGridLayoutZeroComponent,
		CssGridLayoutOneComponent,
		CssGridLayoutTwoComponent
	],
	providers: []
})
export class CssGridLayoutModule {}
