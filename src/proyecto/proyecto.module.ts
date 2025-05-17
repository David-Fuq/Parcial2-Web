import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';

@Module({
  controllers: [ProyectoController],
  imports: [TypeOrmModule.forFeature([ProyectoEntity, EstudianteEntity, ProfesorEntity])],
  providers: [ProyectoService],
})
export class ProyectoModule {}
