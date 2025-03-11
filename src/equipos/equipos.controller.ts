import { Body, Controller, Get, Post } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';

@Controller('equipos')
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Get()
  public findAll(
  ) {
    return this.equiposService.findAll()
  }

  @Post()
  public create(
    @Body() createEquipoDto: CreateEquipoDto,
  ) {
    return this.equiposService.create(createEquipoDto);
  }
  
}
