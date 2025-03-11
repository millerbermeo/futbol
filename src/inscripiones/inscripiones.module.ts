import { Module } from '@nestjs/common';
import { InscripionesService } from './inscripiones.service';
import { InscripionesController } from './inscripiones.controller';

@Module({
  controllers: [InscripionesController],
  providers: [InscripionesService],
})
export class InscripionesModule {}
