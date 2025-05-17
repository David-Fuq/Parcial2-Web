import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionEntity } from 'src/evaluacion/evaluacion.entity/evaluacion.entity';

@Module({
  controllers: [ProfesorController],
  imports: [TypeOrmModule.forFeature([ProfesorEntity, EvaluacionEntity])],
  providers: [ProfesorService],
})
export class ProfesorModule {}
