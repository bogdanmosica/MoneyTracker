import { TestBed } from '@angular/core/testing';

import { CategoryListService } from './category-list.service';

describe('CategoryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryListService = TestBed.get(CategoryListService);
    expect(service).toBeTruthy();
  });
});
