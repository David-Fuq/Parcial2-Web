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
    if (estudiante.promedio < 3.2) {
        throw new Error('El promedio no puede ser menor a 3.2');
    }
    if (estudiante.semestre < 4){
        throw new Error('El semestre no puede ser menor a 4');
    }
       return await this.estudianteRepository.save(estudiante);
   }





}
