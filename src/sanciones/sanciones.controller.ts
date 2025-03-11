import { Controller } from '@nestjs/common';
import { SancionesService } from './sanciones.service';

@Controller('sanciones')
export class SancionesController {
  constructor(private readonly sancionesService: SancionesService) {}
}
