import {AbstractControl} from '@angular/forms';
export class CompareValidation {
	static MatchSelectors(AC: AbstractControl) {
		const carSelected1 = AC.get('carSelected1').value; // to get value in input tag
		const carSelected2 = AC.get('carSelected2').value; // to get value in input tag

		if (carSelected1 === carSelected2 || (carSelected1 === 0 || carSelected2 === 0)) {
			AC.get('carSelected2').setErrors({MatchSelectors: true});
		} else {
			AC.get('carSelected2').setErrors(null);
			return null;
		}
	}
}
