import { Jugador } from 'src/jugadores/entities/jugadores.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany, // Relación muchos a muchos
} from 'typeorm';

@Entity('categorias')
export class Categorias {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', length: 100 })
    public nombre: string;

    @Column({ type: 'int' })
    public max_edad: number;

    // Relación uno a muchos (Una categoría puede tener varios jugadores)
    @OneToMany(() => Jugador, (jugador) => jugador.categoria)
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
