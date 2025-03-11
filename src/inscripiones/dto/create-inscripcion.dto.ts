import { IsInt, IsPositive, IsString, IsOptional, IsDecimal } from 'class-validator';

export class CreateInscripcionDto {
  @IsInt()
  @IsPositive()
  torneo_id: number;

  @IsInt()
  @IsPositive()
  equipo_id: number;

  @IsOptional()
  @IsString()
  estado_pago?: string;

  @IsDecimal()
  monto: number;
}
