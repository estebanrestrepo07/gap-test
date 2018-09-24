import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
	transform(value: any, args?: any): any {
		if (value !== undefined) {
			return value[0].toUpperCase() + value.substr(1).toLowerCase();
		}
	}
}
