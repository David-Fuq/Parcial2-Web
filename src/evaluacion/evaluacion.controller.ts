import { Controller } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';

@Controller('evaluacion')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}
}
