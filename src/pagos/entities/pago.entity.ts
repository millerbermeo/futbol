import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Inscripcion } from 'src/inscripiones/entities/inscripciones.entity';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Inscripcion, (inscripcion) => inscripcion.pagos, { onDelete: 'CASCADE' })
  inscripcion: Inscripcion;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  monto: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_pago: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  metodo_pago?: string;

  @Column({ type: 'varchar', length: 50, default: 'completado' })
  estado: string;
}
