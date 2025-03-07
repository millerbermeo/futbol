import { Controller } from '@nestjs/common';
import { TorneosService } from './torneos.service';

@Controller('torneos')
export class TorneosController {
  constructor(private readonly torneosService: TorneosService) {}
}
