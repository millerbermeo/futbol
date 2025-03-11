import { IsOptional, IsString, IsDecimal } from 'class-validator';

export class UpdateInscripcionDto {
  @IsOptional()
  @IsString()
  estado_pago?: string;

  @IsOptional()
  @IsDecimal()
  monto?: number;
}
