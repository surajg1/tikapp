import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordComponent } from './bord.component';

describe('BordComponent', () => {
  let component: BordComponent;
  let fixture: ComponentFixture<BordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
