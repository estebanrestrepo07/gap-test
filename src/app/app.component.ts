import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	activeColor = {
		'border-bottom': '5px solid #2e3d8d'
	};
}
