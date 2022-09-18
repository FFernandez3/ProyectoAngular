import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdramaListComponent } from './kdrama-list.component';

describe('KdramaListComponent', () => {
  let component: KdramaListComponent;
  let fixture: ComponentFixture<KdramaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdramaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdramaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
