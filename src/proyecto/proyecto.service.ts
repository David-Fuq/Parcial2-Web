import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly proyectoRepository: Repository<ProyectoEntity>,
        @InjectRepository(EstudianteEntity)
        private readonly estudianteRepository: Repository<EstudianteEntity>,
        @InjectRepository(ProfesorEntity)
        private readonly profesorRepository: Repository<ProfesorEntity>,
    ){}

    async crearProyecto(proyecto: ProyectoEntity): Promise<ProyectoEntity> {
        if (proyecto.presupuesto <= 0){
            throw new BadRequestException('El presupuesto no puede ser menor o igual a 0');
        }

        if (proyecto.titulo.length <= 15){
            throw new BadRequestException('El titulo no puede ser menor o igual a 15 caracteres');
        }

        const estudiante: EstudianteEntity | null = await this.estudianteRepository.findOne({ where: { id: proyecto!.lider!.id } });
        if (estudiante === null) {
            throw new BadRequestException('El estudiante no existe');
        }   

        const profesor: ProfesorEntity | null = await this.profesorRepository.findOne({ where: { id: proyecto.mentor.id } });
        if (profesor === null) {
            throw new BadRequestException('El profesor no existe');
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

        if (proyecto.lider === null) {
            return [];
        }
        return [proyecto.lider];
    }
}
