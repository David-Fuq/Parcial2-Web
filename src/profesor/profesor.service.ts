import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { EvaluacionEntity } from 'src/evaluacion/evaluacion.entity/evaluacion.entity';


@Injectable()
export class ProfesorService {
    constructor(
           @InjectRepository(ProfesorEntity)
           private readonly profesorRepository: Repository<ProfesorEntity>,

           @InjectRepository(EvaluacionEntity)
           private readonly evaluacionRepository: Repository<EvaluacionEntity>
       ){}
    
    async crearProfesor(profesor: ProfesorEntity): Promise<ProfesorEntity> {
        if (profesor.extension.toString().length !== 5) {
            throw new BadRequestException('La extension no puede ser menor a 7 digitos');
        }
        const proyecto: string = profesor.mentorias[0].id;
        const proyectoEntity: EvaluacionEntity | null = await this.evaluacionRepository.findOne({ where: { id: proyecto } });
        if (proyectoEntity === null) {
            throw new BadRequestException('El proyecto asignado no existe');
        }
        return await this.profesorRepository.save(profesor);
    }

    async asignarEvaluador(profesorId: string, evaluacionId: string): Promise<ProfesorEntity> {
        const profesor = await this.profesorRepository.findOne({ where: { id: profesorId }, relations: ['evaluaciones'] });
        if (!profesor) {
            throw new BadRequestException('El profesor no existe');
        }
        const evaluacion = await this.evaluacionRepository.findOne({ where: { id: evaluacionId } });
        if (!evaluacion) {
            throw new BadRequestException('La evaluacion no existe');
        }
        if (profesor.evaluaciones.length >= 3) {
            throw new BadRequestException('El profesor ya tiene 3 evaluaciones asignadas');
        }

        profesor.evaluaciones = [...profesor.evaluaciones, evaluacion];
        return await this.profesorRepository.save(profesor);
    }

}
