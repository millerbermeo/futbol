import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateEstadioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  nombre: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  direccion?: string;

  @IsInt()
  @IsOptional()
  capacidad?: number;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  ciudad?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  pais?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}
