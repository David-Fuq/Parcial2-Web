import { IsNotEmpty, IsNumber, IsObject } from 'class-validator';

interface IdObject {
    id: string;
}

export class EvaluacionDto {

    @IsObject()
    @IsNotEmpty()
    readonly profesor: IdObject;

    @IsObject()
    @IsNotEmpty()
    readonly proyecto: IdObject;

    @IsNotEmpty()
    @IsNumber()
    readonly calificacion: number;

}