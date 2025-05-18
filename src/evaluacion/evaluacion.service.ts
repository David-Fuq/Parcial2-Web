import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { In, Repository } from 'typeorm';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';

@Injectable()
export class EvaluacionService {
    constructor(
            @InjectRepository(EvaluacionEntity)
            private readonly evaluacionRepository: Repository<EvaluacionEntity>,

            @InjectRepository(ProyectoEntity)
            private readonly proyectoRepository: Repository<ProyectoEntity>,

            @InjectRepository(ProfesorEntity)
            private readonly profesorRepository: Repository<ProfesorEntity>
        ){}
    
    async crearEvaluacion(evaluacion: EvaluacionEntity): Promise<EvaluacionEntity> {
        if (evaluacion.calificacion < 0 || evaluacion.calificacion > 5) {
            throw new BadRequestException('La calificación debe estar entre 0 y 5');
        }

        const evaluador: string | null = evaluacion.profesor? evaluacion.profesor.id: null;
        const proyecto: string = evaluacion.proyecto.id;

        if (evaluador !== null){
        const evaluadorEntity: ProfesorEntity | null = await this.profesorRepository.findOne({ where: { id: evaluador }, relations: ['evaluaciones', 'mentorias'] });
        if (evaluadorEntity === null) {
            throw new BadRequestException('El evaluador no existe');
        }
    }

        const proyectoEntity: ProyectoEntity | null = await this.proyectoRepository.findOne({ where: { id: proyecto }, relations: ['mentor'] });
        if (proyectoEntity === null) {
            throw new BadRequestException('El proyecto no existe');
        }
        const mentor: string = proyectoEntity.mentor.id;
        if (mentor === evaluador) {
            throw new BadRequestException('El evaluador no puede ser el mentor del proyecto');
        }

        return await this.evaluacionRepository.save(evaluacion);
    }
    
}
