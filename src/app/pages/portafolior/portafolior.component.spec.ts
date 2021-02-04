import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoliorComponent } from './portafolior.component';

describe('PortafoliorComponent', () => {
  let component: PortafoliorComponent;
  let fixture: ComponentFixture<PortafoliorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafoliorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoliorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
