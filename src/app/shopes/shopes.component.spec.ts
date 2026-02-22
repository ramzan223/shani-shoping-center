import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopesComponent } from './shopes.component';

describe('ShopesComponent', () => {
  let component: ShopesComponent;
  let fixture: ComponentFixture<ShopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
