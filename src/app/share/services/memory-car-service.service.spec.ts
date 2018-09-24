import {TestBed} from '@angular/core/testing';

import {MemoryCarService} from './memory-car-service.service';

describe('MemoryCarService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: MemoryCarService = TestBed.get(MemoryCarService);
		expect(service).toBeTruthy();
	});
});
