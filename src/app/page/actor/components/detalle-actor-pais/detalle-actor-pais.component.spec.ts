import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActorPaisComponent } from './detalle-actor-pais.component';

describe('DetalleActorPaisComponent', () => {
  let component: DetalleActorPaisComponent;
  let fixture: ComponentFixture<DetalleActorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleActorPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleActorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
