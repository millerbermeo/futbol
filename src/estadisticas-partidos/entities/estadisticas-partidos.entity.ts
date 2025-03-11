import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('estadisticas_partidos')
export class Estadisticas {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "int" })
    partido_id: number

    @Column({ type: "int" })
    jugador_id: number

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