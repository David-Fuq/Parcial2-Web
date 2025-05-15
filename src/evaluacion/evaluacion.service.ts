import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluacionService {
    constructor(
            @InjectRepository(EvaluacionEntity)
            private readonly evaluacionRepository: Repository<EvaluacionEntity>
        ){}
    
    async create(evaluacion: EvaluacionEntity): Promise<EvaluacionEntity> {
        return await this.evaluacionRepository.save(evaluacion);
    }
    
}
