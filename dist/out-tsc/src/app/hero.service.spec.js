import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
describe('HeroService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(HeroService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=hero.service.spec.js.map