import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EstudianteController],
  imports: [TypeOrmModule.forFeature([EstudianteEntity])],
  providers: [EstudianteService],
})
export class EstudianteModule {}
