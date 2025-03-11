import { Controller } from '@nestjs/common';
import { InscripionesService } from './inscripiones.service';

@Controller('inscripiones')
export class InscripionesController {
  constructor(private readonly inscripionesService: InscripionesService) {}
}
