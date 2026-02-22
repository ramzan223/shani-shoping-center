import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotaComponent } from './gota.component';

describe('GotaComponent', () => {
  let component: GotaComponent;
  let fixture: ComponentFixture<GotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
