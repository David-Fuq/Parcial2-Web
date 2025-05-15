import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorService } from './profesor.service';


@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

}
