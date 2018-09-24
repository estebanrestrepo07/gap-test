import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
@Injectable({
	providedIn: 'root'
})
export class AllowAccessGuard implements CanActivate {
	location;
	constructor(private router: Router, location: Location) {
		this.location = location;
	}
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		console.log(location.pathname);

		if (location.pathname === '/list') {
			return true;
		} else {
			this.router.navigate(['/']);
		}
		return false;
	}
}
