import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenralComponent } from './jenral.component';

describe('JenralComponent', () => {
  let component: JenralComponent;
  let fixture: ComponentFixture<JenralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JenralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JenralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
