import { Jugador } from 'src/jugadores/entities/jugadores.entity';
import { Usuarios } from 'src/usuarios/entities/usuarios.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany, // Relación uno a muchos
} from 'typeorm';

@Entity('equipos')
export class Equipos {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', length: 100 })
    public nombre: string;

    @Column({ type: 'varchar', length: 100 })
    public escudo: string;

    // Relación uno a uno: un equipo tiene un solo técnico
    @OneToOne(() => Usuarios)
    @JoinColumn()
    tecnico: Usuarios;

    // Relación uno a muchos (Un equipo puede tener varios jugadores)
    @OneToMany(() => Jugador, (jugador) => jugador.equipo)
    jugadores: Jugador[];

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
