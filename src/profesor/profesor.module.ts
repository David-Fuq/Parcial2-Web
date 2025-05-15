import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProfesorController],
  imports: [TypeOrmModule.forFeature([ProfesorEntity])],
  providers: [ProfesorService],
})
export class ProfesorModule {}
