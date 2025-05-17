import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { Repository } from 'typeorm';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';

@Injectable()
export class EstudianteService {
    constructor(
       @InjectRepository(EstudianteEntity)
       private readonly estudianteRepository: Repository<EstudianteEntity>,

       @InjectRepository(ProyectoEntity)
       private readonly proyectoRepository: Repository<ProyectoEntity>
   ){}

   async crearEstudiante(estudiante: EstudianteEntity): Promise<EstudianteEntity> {
    if (estudiante.promedio < 3.2) {
        throw new BadRequestException('El promedio no puede ser menor a 3.2');
    }
    if (estudiante.semestre < 4){
        throw new BadRequestException('El semestre no puede ser menor a 4');
    }
       return await this.estudianteRepository.save(estudiante);
   }

   async findOneEstudiante(id: string): Promise<EstudianteEntity> {
       const estudiante : EstudianteEntity | null = await this.estudianteRepository.findOne({ where: { id }, relations: ['proyectos'] });
       if (estudiante === null) {
           throw new BadRequestException('El estudiante no existe');
       }
       return estudiante;
   }

    async eliminarEstudiante(id: string) {
        const estudiante: EstudianteEntity | null = await this.estudianteRepository.findOne({ where: { id }, relations: ['proyectos'] });
        if (estudiante === null) {
            throw new BadRequestException("No se encontró un estudiante con ese Id");
        }

        const proyectos = estudiante.proyectos;
        if (proyectos.length === 0 || proyectos === null) {
            await this.estudianteRepository.remove([estudiante]);
            return;
        }
        for (const proyecto of proyectos) {
            if (
                    new Date(proyecto.fecha_inicio).getTime() <= Date.now() && 
                    new Date(proyecto.fecha_fin).getTime() >= Date.now()
                ) {
                    throw new BadRequestException("No se puede eliminar el estudiante porque tiene proyectos en curso");
                }
        }

        for (const proyecto of proyectos){
            proyecto.lider = null;
            await this.proyectoRepository.save(proyecto);
        }

        await this.estudianteRepository.remove([estudiante]);
    }





}
