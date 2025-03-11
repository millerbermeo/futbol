import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/crate-categoria.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {
  }

   @Post()
    public create(
      @Body() createCategoriaDto: CreateCategoriaDto,
    ) {
      return this.categoriasService.createCategoria(createCategoriaDto);
    }

    @Get()
    public listar() {
      return this.categoriasService.findAll()
    }
}
