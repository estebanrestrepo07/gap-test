import {AllowAccessGuard} from './share/guards/allow-access/allow-access.guard';
import {DetailsComponent} from './layout/details/details.component';
import {CompareComponent} from './layout/compare/compare.component';
import {ListComponent} from './layout/list/list.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{path: '', redirectTo: 'list', pathMatch: 'full'},
	{path: 'list', component: ListComponent},
	{path: 'compare', component: CompareComponent},
	{path: 'details/car/:carId', component: DetailsComponent, canActivate: [AllowAccessGuard]},
	{path: '**', redirectTo: 'list'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
