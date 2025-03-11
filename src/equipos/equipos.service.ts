import { Injectable } from '@nestjs/common';
import { Equipos } from './entities/equipos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEquipoDto } from './dto/create-equipo.dto';

@Injectable()
export class EquiposService {

    constructor(
        @InjectRepository(Equipos)
        private equipoRepository: Repository<Equipos>
    ) { }

    async create(createEquipoDto: CreateEquipoDto) {

        const { nombre, escudo, tecnico } = createEquipoDto

        if (tecnico) {
            console.log("tecnico no existe")
        }

        const equipo = this.equipoRepository.create({
            nombre,
            escudo,
            tecnico: tecnico ? { id: tecnico } : undefined,
        });
        return await this.equipoRepository.save(equipo)
    }

    async findAll(): Promise<Equipos[]> {

        const equipos = await this.equipoRepository.find()

        return equipos
    }

    async findOne(id: number) {
         const equipo = await this.equipoRepository.findOneBy({ id });

         if (!equipo) {
            throw('El equipo no se encuentra registrado')
         }

         return equipo
      }
    

}
