import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransfertComponent } from './create-transfert.component';

describe('CreateTransfertComponent', () => {
  let component: CreateTransfertComponent;
  let fixture: ComponentFixture<CreateTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
