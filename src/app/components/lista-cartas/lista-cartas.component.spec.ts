import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartasComponent } from './lista-cartas.component';

describe('ListaCartasComponent', () => {
  let component: ListaCartasComponent;
  let fixture: ComponentFixture<ListaCartasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCartasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
