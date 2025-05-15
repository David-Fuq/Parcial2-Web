import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {
    constructor(
       @InjectRepository(EstudianteEntity)
       private readonly estudianteRepository: Repository<EstudianteEntity>
   ){}

   async create(estudiante: EstudianteEntity): Promise<EstudianteEntity> {
       return await this.estudianteRepository.save(estudiante);
   }

}
