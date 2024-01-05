import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouusComponent } from './abouus.component';

describe('AbouusComponent', () => {
  let component: AbouusComponent;
  let fixture: ComponentFixture<AbouusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouusComponent]
    });
    fixture = TestBed.createComponent(AbouusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
