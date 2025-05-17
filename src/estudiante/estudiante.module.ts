import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';

@Module({
  controllers: [EstudianteController],
  imports: [TypeOrmModule.forFeature([EstudianteEntity, ProyectoEntity])],
  providers: [EstudianteService],
})
export class EstudianteModule {}
