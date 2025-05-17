import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class EvaluacionEntity {
    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column()
    calificacion: number;

    @ManyToOne(() => ProyectoEntity, proyecto => proyecto.evaluaciones)
    proyecto: ProyectoEntity;

    @ManyToOne(() => ProfesorEntity, profesor => profesor.evaluaciones)
    profesor: ProfesorEntity;

}
