import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Roles } from '../enums/roles.enum';

@Entity('usuarios')
export class Usuarios {

    @PrimaryGeneratedColumn()
    public id: number

    @Column({ type: 'varchar', length: 100 })
    public nombre: string;

    @Column({ type: 'varchar', unique: true, length: 100, nullable: false })
    public email: string;

    @Column({ type: 'varchar', length: 255, nullable: true, select: false })
    public password: string;

    @Column({ type: 'timestamp', nullable: true })
    public email_verified_at: Date | null;

    @Column({
        type: 'enum',
        enum: Roles,
        default: Roles.DEFAULT,
      })
      role: Roles;

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
