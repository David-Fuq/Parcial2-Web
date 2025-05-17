import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly proyectoRepository: Repository<ProyectoEntity>,
        @InjectRepository(EstudianteEntity)
        private readonly estudianteRepository: Repository<EstudianteEntity>
    ){}

    async crearProyecto(proyecto: ProyectoEntity): Promise<ProyectoEntity> {
        if (proyecto.presupuesto < 0){
            throw new BadRequestException('El presupuesto no puede ser menor o igual a 0');
        }

        if (proyecto.titulo.length <= 15){
            throw new BadRequestException('El titulo no puede ser menor o igual a 15 caracteres');
        }
        return await this.proyectoRepository.save(proyecto);
    }

    async avanzarProyecto(id: string): Promise<ProyectoEntity> {
        const proyecto: ProyectoEntity | null = await this.proyectoRepository.findOne({ where: { id } });
        if (proyecto === null) {
            throw new BadRequestException('El proyecto no existe');
        }
        if (proyecto.estado === 4) {
            throw new BadRequestException('El proyecto ya esta en su etapa final');
        }
        proyecto.estado = proyecto.estado + 1;
        return await this.proyectoRepository.save(proyecto);
    }

    async findAllEstudiantes(id: string): Promise<EstudianteEntity[]> {
        const proyecto: ProyectoEntity | null = await this.proyectoRepository.findOne({ where: { id }, relations: ['estudiantes'] });
        if (proyecto === null) {
            throw new BadRequestException('El proyecto no existe');
        }
        return [proyecto.estudiante];
    }
}
