import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSancionDto {
  @IsInt()
  @IsNotEmpty()
  jugadorId: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  tipoSancion?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  fechaInicio?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  fechaFin?: Date;
}
