import { Inscripcion } from "src/inscripiones/entities/inscripciones.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity('torneos')
export class Torneo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 100 })
    nombre: string

    @Column({ type: 'timestamp' })
    fecha_inicio: Date

    @Column({ type: 'timestamp' })
    fecha_fin: Date

    @Column({ type: "text" })
    descripcion: string

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


    @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.torneo)
  inscripciones: Inscripcion[];


}