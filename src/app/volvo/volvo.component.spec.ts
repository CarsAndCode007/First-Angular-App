import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolvoComponent } from './volvo.component';

describe('VolvoComponent', () => {
  let component: VolvoComponent;
  let fixture: ComponentFixture<VolvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolvoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
