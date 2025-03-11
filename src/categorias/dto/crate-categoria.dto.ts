import { IsInt, IsString, MaxLength } from 'class-validator';

export class CreateCategoriaDto {
    @IsString()
    @MaxLength(100)
    nombre: string;

    @IsInt()
    max_edad: number;
}
