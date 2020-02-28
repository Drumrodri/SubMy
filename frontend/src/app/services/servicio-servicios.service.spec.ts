import { TestBed } from '@angular/core/testing';

import { ServicioServiciosService } from './servicio-servicios.service';

describe('ServicioServiciosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioServiciosService = TestBed.get(ServicioServiciosService);
    expect(service).toBeTruthy();
  });
});
