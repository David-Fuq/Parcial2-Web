import { Module } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionController } from './evaluacion.controller';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';

@Module({
  controllers: [EvaluacionController],
  imports: [TypeOrmModule.forFeature([EvaluacionEntity, ProfesorEntity, ProyectoEntity])],
  providers: [EvaluacionService],
})
export class EvaluacionModule {}
