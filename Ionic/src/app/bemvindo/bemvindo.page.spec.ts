import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BemvindoPage } from './bemvindo.page';

describe('BemvindoPage', () => {
  let component: BemvindoPage;
  let fixture: ComponentFixture<BemvindoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BemvindoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BemvindoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
