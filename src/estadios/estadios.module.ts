import { Module } from '@nestjs/common';
import { EstadiosService } from './estadios.service';
import { EstadiosController } from './estadios.controller';

@Module({
  controllers: [EstadiosController],
  providers: [EstadiosService],
})
export class EstadiosModule {}
