import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly proyectoRepository: Repository<ProyectoEntity>
    ){}

    async create(estudiante: ProyectoEntity): Promise<ProyectoEntity> {
        return await this.proyectoRepository.save(estudiante);
    }
}
