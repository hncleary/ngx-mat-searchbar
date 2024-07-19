import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatSearchbarComponent } from './ngx-mat-searchbar.component';

describe('NgxMatSearchbarComponent', () => {
  let component: NgxMatSearchbarComponent;
  let fixture: ComponentFixture<NgxMatSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatSearchbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxMatSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
