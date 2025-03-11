import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateJugadorDto {
    @IsString()
    @MaxLength(100)
    nombre: string;

    @IsDateString()
    fecha_nacimiento: Date;

    @IsString()
    @MaxLength(100)
    posicion: string;

    @IsString()
    @MaxLength(100)
    estado: string;

    @IsOptional()
    @IsInt()
    equipo?: number; // ID del equipo (opcional)

    @IsOptional()
    @IsInt()
    categoria?: number; // ID de la categoría (opcional)
}
