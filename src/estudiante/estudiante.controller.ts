import { Controller, Post, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteDto } from './estudiante.dto';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { plainToInstance } from 'class-transformer';

@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  async create(@Body() estudianteDto: EstudianteDto): Promise<EstudianteEntity> {
      const estudiante: EstudianteEntity = plainToInstance(EstudianteEntity, estudianteDto);
      return await this.estudianteService.crearEstudiante(estudiante);
  }

  @Delete(':estudianteId')
  @HttpCode(204)
  async delete(@Param('estudianteId') estudianteId: string): Promise<void> {
      return await this.estudianteService.eliminarEstudiante(estudianteId);
  }

}
