import { Jugador } from "src/jugadores/entities/jugadores.entity";
import { Partido } from "src/partidos/entities/partidos.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('estadisticas_partido_jugador')
export class Estadisticas {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => Partido, (partido) => partido.estadisticas, { onDelete: "CASCADE" })
    @JoinColumn({ name: "partido_id" })
    partido: Partido;

    @ManyToOne(() => Jugador, (jugador) => jugador.estadisticas, { onDelete: "CASCADE" })
    @JoinColumn({ name: "jugador_id" })
    jugador: Jugador;

    @Column({ type: "int", nullable: true })
    goles: number

    @Column({ type: "int", nullable: true })
    tarjetas_amarillas: number

    @Column({ type: "int", nullable: true })
    tarjetas_rojas: number

    @Column({ type: "int", nullable: true })
    asistencias: number

    @Column({ type: "int", nullable: true })
    minutos_jugados: number

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