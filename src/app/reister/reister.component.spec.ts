import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReisterComponent } from './reister.component';

describe('ReisterComponent', () => {
  let component: ReisterComponent;
  let fixture: ComponentFixture<ReisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
