import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {HomeModule} from './home.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        HomeModule
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
