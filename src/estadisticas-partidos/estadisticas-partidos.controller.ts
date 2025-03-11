import { Controller } from '@nestjs/common';
import { EstadisticasPartidosService } from './estadisticas-partidos.service';

@Controller('estadisticas-partidos')
export class EstadisticasPartidosController {
  constructor(private readonly estadisticasPartidosService: EstadisticasPartidosService) {}
}
