import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasListaComponent } from './product-list.component';

describe('TarefasListaComponent', () => {
  let component: TarefasListaComponent;
  let fixture: ComponentFixture<TarefasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefasListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
