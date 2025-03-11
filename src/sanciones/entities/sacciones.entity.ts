import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Jugador } from 'src/jugadores/entities/jugadores.entity';

@Entity('sanciones')
export class Sancion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Jugador, (jugador) => jugador.sanciones, { onDelete: 'CASCADE' })
  jugador: Jugador;

  @Column({ type: 'varchar', length: 100, nullable: true })
  tipoSancion?: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ type: 'date', nullable: true })
  fechaInicio?: Date;

  @Column({ type: 'date', nullable: true })
  fechaFin?: Date;
}
