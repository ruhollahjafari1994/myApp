import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuckComponent } from './fuck.component';

describe('FuckComponent', () => {
  let component: FuckComponent;
  let fixture: ComponentFixture<FuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
