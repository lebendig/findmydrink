import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponentTsComponent } from './search.component.ts.component';

describe('SearchComponentTsComponent', () => {
  let component: SearchComponentTsComponent;
  let fixture: ComponentFixture<SearchComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponentTsComponent]
    });
    fixture = TestBed.createComponent(SearchComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
