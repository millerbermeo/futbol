import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('partidos')
export class Partido {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'int' })
    torneo_id: number

    @Column({ type: 'int' })
    equipo_local: number

    @Column({ type: 'int' })
    equipo_visitante: number

    @Column({ type: 'varchar' })
    fecha_programada: string

    @Column({ type: 'varchar' })
    hora_programada: string

    @Column({ type: 'int' })
    estadio_id: number

    @Column({ type: 'int' })
    goles_local: number

    @Column({ type: 'int' })
    goles_visitante: number


    @Column({ type: 'varchar' })
    estado: string

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