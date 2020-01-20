import { NgModule } from '@angular/core';
import { CssGridLayoutComponent } from './css-grid-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CssGridLayoutZeroComponent } from './css-grid-layout-zero/css-grid-layout-zero.component';

const routes: Routes = [
    {
      path: '', component: CssGridLayoutComponent
    }
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
        CssGridLayoutComponent
    ],
    providers: []
})
export class CssGridLayoutModule {}
