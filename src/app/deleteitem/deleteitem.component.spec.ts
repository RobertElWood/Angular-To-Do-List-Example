import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteitemComponent } from './deleteitem.component';

describe('DeleteitemComponent', () => {
  let component: DeleteitemComponent;
  let fixture: ComponentFixture<DeleteitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
