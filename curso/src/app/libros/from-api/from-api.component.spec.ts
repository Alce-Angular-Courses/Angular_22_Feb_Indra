import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromApiComponent } from './from-api.component';

describe('FromApiComponent', () => {
  let component: FromApiComponent;
  let fixture: ComponentFixture<FromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
