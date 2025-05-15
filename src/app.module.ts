import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { EstudianteEntity } from './estudiante/estudiante.entity/estudiante.entity';
import { ProfesorEntity } from './profesor/profesor.entity/profesor.entity';
import { ProyectoEntity } from './proyecto/proyecto.entity/proyecto.entity';
import { EvaluacionEntity } from './evaluacion/evaluacion.entity/evaluacion.entity';

@Module({
  imports: [EstudianteModule,
    ProfesorModule,
    ProyectoModule,
    EvaluacionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'parcial2_db',
      entities: [EstudianteEntity, ProfesorEntity, ProyectoEntity, EvaluacionEntity],
      dropSchema: true,
      synchronize: false,
   }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
