import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jugador } from './entities/jugadores.entity';
import { Repository } from 'typeorm';
import { CreateJugadorDto } from './dto/create-jugadores.dto';

@Injectable()
export class JugadoresService {
    constructor(
        @InjectRepository(Jugador)
        private jugadorRepository : Repository<Jugador>
    ){}

    async crearJugador(createJugadorDto: CreateJugadorDto) {
        const { nombre, equipo, estado, posicion, fecha_nacimiento, categoria } = createJugadorDto;
    
        // Se pasa un objeto con los valores correspondientes
        const jugador = this.jugadorRepository.create({
            nombre,
            estado,
            posicion,
            fecha_nacimiento,
            equipo: equipo ? { id: equipo } : undefined,  // Relación con equipo
            categoria: categoria ? { id: categoria } : undefined,  // Relación con categoría
        });
    
        return await this.jugadorRepository.save(jugador);
    }
    
}
