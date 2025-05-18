import { Controller, Post, Body, Param, Put, Get } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoDto } from './proyecto.dto';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { plainToInstance } from 'class-transformer';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';

@Controller('proyectos')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Post()
  async create(@Body() proyectoDto: ProyectoDto): Promise<ProyectoEntity> {
      const proyecto: ProyectoEntity = plainToInstance(ProyectoEntity, proyectoDto);
      return await this.proyectoService.crearProyecto(proyecto);
  }

  @Put(':proyectoId')
  async update(@Param('proyectoId') proyectoId: string): Promise<ProyectoEntity> {
      return await this.proyectoService.avanzarProyecto(proyectoId);
  }

  @Get(':proyectoId/estudiantes')
  async findAllEstudiantes(@Param('proyectoId') proyectoId: string): Promise<EstudianteEntity[]> {
      return await this.proyectoService.findAllEstudiantes(proyectoId);
  }
}
