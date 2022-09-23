import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimchiAboutComponent } from './kimchi-about.component';

describe('KimchiAboutComponent', () => {
  let component: KimchiAboutComponent;
  let fixture: ComponentFixture<KimchiAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimchiAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KimchiAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
