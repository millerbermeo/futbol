import { Module } from '@nestjs/common';
import { SancionesService } from './sanciones.service';
import { SancionesController } from './sanciones.controller';

@Module({
  controllers: [SancionesController],
  providers: [SancionesService],
})
export class SancionesModule {}
