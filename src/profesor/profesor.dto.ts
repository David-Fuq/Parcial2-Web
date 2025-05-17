import { IsNotEmpty, IsNumber, IsObject, IsString, IsDateString, IsBoolean } from 'class-validator';

interface IdObject {
    id: string;
}

export class ProfesorDto {

    @IsNumber()
    @IsNotEmpty()
    readonly cedula: number;

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly departamento: string;

    @IsNumber()
    @IsNotEmpty()
    readonly extension: number;

    @IsBoolean()
    @IsNotEmpty()
    readonly esParEvaluador: boolean;


}