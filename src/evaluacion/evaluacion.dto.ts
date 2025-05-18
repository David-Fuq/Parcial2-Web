import { IsNotEmpty, IsNumber, IsObject, IsOptional } from 'class-validator';

interface IdObject {
    id: string;
}

export class EvaluacionDto {

    @IsObject()
    @IsOptional()
    readonly profesor: IdObject;

    @IsObject()
    @IsNotEmpty()
    readonly proyecto: IdObject;

    @IsNotEmpty()
    @IsNumber()
    readonly calificacion: number;

}