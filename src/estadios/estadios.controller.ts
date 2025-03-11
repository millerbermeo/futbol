import { Controller } from '@nestjs/common';
import { EstadiosService } from './estadios.service';

@Controller('estadios')
export class EstadiosController {
  constructor(private readonly estadiosService: EstadiosService) {}
}
