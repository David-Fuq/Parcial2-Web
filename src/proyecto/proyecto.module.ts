import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';

@Module({
  controllers: [ProyectoController],
  imports: [TypeOrmModule.forFeature([ProyectoEntity, EstudianteEntity])],
  providers: [ProyectoService],
})
export class ProyectoModule {}
