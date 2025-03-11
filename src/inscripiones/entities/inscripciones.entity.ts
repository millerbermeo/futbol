import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Torneo } from 'src/torneos/entities/torneos.entity';
import { Equipos } from 'src/equipos/entities/equipos.entity';
import { Pago } from 'src/pagos/entities/pago.entity';

@Entity('inscripciones')
export class Inscripcion {
    @PrimaryGeneratedColumn()
    id: number;

    // Relación muchos a uno (una inscripción pertenece a un solo torneo)
    @ManyToOne(() => Torneo, (torneo) => torneo.inscripciones, { onDelete: 'CASCADE' })
    torneo: Torneo;

    // Relación muchos a uno (una inscripción pertenece a un solo equipo)
    @ManyToOne(() => Equipos, (equipo) => equipo.inscripciones, { onDelete: 'CASCADE' })
    equipo: Equipos;

    @OneToMany(() => Pago, (pago) => pago.inscripcion)
    pagos: Pago[];

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_inscripcion: Date;

    @Column({ type: 'varchar', length: 50, default: 'pendiente' })
    estado_pago: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    monto: number;
}
