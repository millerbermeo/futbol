import { Partido } from 'src/partidos/entities/partidos.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('estadios')
export class Estadio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    nombre: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    direccion?: string;

    @Column({ type: 'int', nullable: true })
    capacidad?: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    ciudad?: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    pais?: string;

    @Column({ type: 'text', nullable: true })
    descripcion?: string;

    // Relación uno a muchos (Un estadio puede tener muchos partidos)
    @OneToMany(() => Partido, (partido) => partido.estadio)
    partidos: Partido[];

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
