import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimchiKdramasComponent } from './kimchi-kdramas.component';

describe('KimchiKdramasComponent', () => {
  let component: KimchiKdramasComponent;
  let fixture: ComponentFixture<KimchiKdramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimchiKdramasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KimchiKdramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
