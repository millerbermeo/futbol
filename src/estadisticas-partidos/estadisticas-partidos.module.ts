import { Module } from '@nestjs/common';
import { EstadisticasPartidosService } from './estadisticas-partidos.service';
import { EstadisticasPartidosController } from './estadisticas-partidos.controller';

@Module({
  controllers: [EstadisticasPartidosController],
  providers: [EstadisticasPartidosService],
})
export class EstadisticasPartidosModule {}
