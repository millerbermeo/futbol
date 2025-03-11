import { IsInt, IsString } from "class-validator";

export class CreateEquipoDto {
    
    @IsString()
    nombre: string

    @IsString()
    escudo: string

    @IsInt()
    tecnico: number
}