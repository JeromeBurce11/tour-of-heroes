import { TestBed } from '@angular/core/testing';
import { InMemoryDataService } from './in-memory-data.service';
describe('InMemoryDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(InMemoryDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=in-memory-data.service.spec.js.map