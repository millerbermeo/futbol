import { Categorias } from 'src/categorias/entities/categorias.entity';
import { Equipos } from 'src/equipos/entities/equipos.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne, // Relación muchos a uno
} from 'typeorm';

@Entity('jugadores')
export class Jugador {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', length: 100 })
    public nombre: string;

    @Column()
    public fecha_nacimiento: Date;

    @Column({ type: 'varchar', length: 100 })
    public posicion: string;

    @Column({ type: 'varchar', length: 100 })
    public estado: string;

    // Relación muchos a uno (Un jugador pertenece a un solo equipo)
    @ManyToOne(() => Equipos, (equipo) => equipo.jugadores)
    equipo: Equipos;

    // Relación muchos a uno (Un jugador pertenece a una sola categoría)
    @ManyToOne(() => Categorias, (categoria) => categoria.jugadores)
    categoria: Categorias;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        select: false,
    })
    public created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
        select: false,
    })
    public updated_at: Date;
}
