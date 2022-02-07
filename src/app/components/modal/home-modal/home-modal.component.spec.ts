import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HomeModalComponent } from './home-modal.component';

describe('HomeModalComponent', () => {
  let component: HomeModalComponent;
  let fixture: ComponentFixture<HomeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeModalComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {} 
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
