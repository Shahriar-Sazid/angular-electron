import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAccountComponent } from './save-account.component';

describe('AddAccountComponent', () => {
  let component: SaveAccountComponent;
  let fixture: ComponentFixture<SaveAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
