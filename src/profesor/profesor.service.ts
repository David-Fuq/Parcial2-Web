import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfesorEntity } from './profesor.entity/profesor.entity';


@Injectable()
export class ProfesorService {
    constructor(
           @InjectRepository(ProfesorEntity)
           private readonly profesorRepository: Repository<ProfesorEntity>
       ){}
    
    async create(profesor: ProfesorEntity): Promise<ProfesorEntity> {
        return await this.profesorRepository.save(profesor);
    }

}
