import { Controller, Post, Body } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionDto } from './evaluacion.dto';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { plainToInstance } from 'class-transformer';

@Controller('evaluaciones')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  @Post()
  async create(@Body() evaluacionDto: EvaluacionDto): Promise<EvaluacionEntity> {
      const evaluacion: EvaluacionEntity = plainToInstance(EvaluacionEntity, evaluacionDto);
      return await this.evaluacionService.crearEvaluacion(evaluacion);
  }


}
