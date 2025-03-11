import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorias } from './entities/categorias.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/crate-categoria.dto';

@Injectable()
export class CategoriasService {

    constructor(
        @InjectRepository(Categorias)
        private categoriasRepository : Repository<Categorias>
    ){}

    async createCategoria(createCategoriaDto: CreateCategoriaDto) {
        const categoria = this.categoriasRepository.create(createCategoriaDto)
        return await this.categoriasRepository.save(categoria)
    }

    async findAll(): Promise<Categorias[]> {
        const categorias = await this.categoriasRepository.find()
        return categorias
    }

}
