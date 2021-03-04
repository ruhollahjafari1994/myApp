import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardsComponent } from './wild-cards.component';

describe('WildCardsComponent', () => {
  let component: WildCardsComponent;
  let fixture: ComponentFixture<WildCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
