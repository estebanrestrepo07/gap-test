import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
	MatIconModule,
	MatSidenavModule,
	MatMenuModule,
	MatCardModule,
	MatButtonModule,
	MatListModule,
	MatExpansionModule,
	MatDialogModule,
	MatToolbarModule,
	MatTableModule,
	MatSelectModule,
	MatRadioModule,
	MatTabsModule,
	MatSnackBarModule,
	MatCheckboxModule,
	MatInputModule,
	MatSliderModule
} from '@angular/material';
const materialModules = [
	MatIconModule,
	MatSidenavModule,
	MatMenuModule,
	MatCardModule,
	MatButtonModule,
	MatListModule,
	MatExpansionModule,
	MatDialogModule,
	MatToolbarModule,
	MatTableModule,
	MatSelectModule,
	MatRadioModule,
	MatTabsModule,
	MatSnackBarModule,
	MatCheckboxModule,
	MatInputModule,
	MatSliderModule,
	FlexLayoutModule
];
@NgModule({
	imports: materialModules,
	exports: materialModules
})
export class MaterialModule {}
