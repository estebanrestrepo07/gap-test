import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'objectFor'
})
export class ObjectForPipe implements PipeTransform {
	transform(value: any, args?: any): any {
		const keys = [];
		const omitKeys = ['carMakeId', 'pictureUrl', 'carId', 'description'];
		for (const key in value) {
			if (omitKeys.indexOf(key) === -1) {
				const newValue = value[key] !== '' ? value[key] : 'No avaliable';
				keys.push({key: key, value: newValue});
			}
		}
		return keys;
	}
}
