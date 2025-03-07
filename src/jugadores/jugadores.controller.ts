import { Controller } from '@nestjs/common';
import { JugadoresService } from './jugadores.service';

@Controller('jugadores')
export class JugadoresController {
  constructor(private readonly jugadoresService: JugadoresService) {}
}
