import { IsNotEmpty, IsNumber, IsObject, IsString, IsDateString, IsBoolean } from 'class-validator';

interface IdObject {
    id: string;
}

export class ProyectoDto {

    @IsString()
    @IsNotEmpty()
    readonly titulo: string;

    @IsString()
    @IsNotEmpty()
    readonly area: string;

    @IsNumber()
    @IsNotEmpty()
    readonly presupuesto: number;

    @IsNumber()
    @IsNotEmpty()
    readonly nota_final: number;

    @IsNumber()
    @IsNotEmpty()
    readonly estado: number;

    @IsDateString()
    @IsNotEmpty()
    readonly fecha_inicio: string;

    @IsDateString()
    @IsNotEmpty()
    readonly fecha_fin: string;
    
    @IsObject()
    @IsNotEmpty()
    readonly lider: IdObject;

    @IsObject()
    @IsNotEmpty()
    readonly mentor: IdObject;

}