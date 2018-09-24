import {CapitalizePipe} from './capitalize/capitalize.pipe';
import {ObjectForPipe} from './object-for/object-for.pipe';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
const pipes = [ObjectForPipe, CapitalizePipe];
@NgModule({
	imports: [CommonModule],
	declarations: pipes,
	exports: pipes
})
export class PipesModule {}
