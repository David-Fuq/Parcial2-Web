import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorDto } from './profesor.dto';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { plainToInstance } from 'class-transformer';


@Controller('profesores')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  async create(@Body() profesorDto: ProfesorDto): Promise<ProfesorEntity> {
      const profesor: ProfesorEntity = plainToInstance(ProfesorEntity, profesorDto);
      return await this.profesorService.crearProfesor(profesor);
  }

  @Post(':profesorId/evaluaciones/:evaluacionId')
  async addEvaluacionToProfesor(@Param('profesorId') profesorId: string, @Param('evaluacionId') evaluacionId: string): Promise<ProfesorEntity> {
      return await this.profesorService.asignarEvaluador(profesorId, profesorId);
  }

}
