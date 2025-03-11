import { Categorias } from 'src/categorias/entities/categorias.entity';
import { Equipos } from 'src/equipos/entities/equipos.entity';
import { Estadisticas } from 'src/estadisticas-partidos/entities/estadisticas-partidos.entity';
import { Sancion } from 'src/sanciones/entities/sacciones.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany, // Relación muchos a uno
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

    // Relación uno a muchos con sanciones (Un jugador puede tener muchas sanciones)
    @OneToMany(() => Sancion, (sancion) => sancion.jugador, { cascade: true })
    sanciones: Sancion[];

    @OneToMany(() => Estadisticas, (estadisticas) => estadisticas.jugador)
    estadisticas: Estadisticas[];

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
