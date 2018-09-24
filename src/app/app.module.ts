import {PipesModule} from './share/pipes/pipes.module';
import {MaterialModule} from './angular-material.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// extra libraries
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

// components
import {AppComponent} from './app.component';
import {ListComponent} from './layout/list/list.component';
import {CompareComponent} from './layout/compare/compare.component';
import {HeaderComponent} from './share/components/header/header.component';
import {CarCardComponent} from './share/components/car-card/car-card.component';
import {MemoryCarService} from './share/services/memory-car-service.service';
import {CarTableInfoComponent} from './share/components/car-table-info/car-table-info.component';
import { DetailsComponent } from './layout/details/details.component';

@NgModule({
	declarations: [AppComponent, ListComponent, CompareComponent, HeaderComponent, CarCardComponent, CarTableInfoComponent, DetailsComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		PipesModule,
		HttpClientInMemoryWebApiModule.forRoot(MemoryCarService)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
