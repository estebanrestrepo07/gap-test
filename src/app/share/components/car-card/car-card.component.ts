import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-car-card',
	templateUrl: './car-card.component.html',
	styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
	@Input() carInfo;
}
