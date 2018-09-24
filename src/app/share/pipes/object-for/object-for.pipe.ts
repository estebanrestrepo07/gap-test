import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'objectFor'
})
export class ObjectForPipe implements PipeTransform {
	transform(value: any, args?: any): any {
		const keys = [];
		const omitKeys = ['carMakeId', 'pictureUrl', 'carId'];
		for (const key in value) {
			if (omitKeys.indexOf(key) === -1) {
				keys.push({key: key, value: value[key]});
			}
		}
		return keys;
	}
}
