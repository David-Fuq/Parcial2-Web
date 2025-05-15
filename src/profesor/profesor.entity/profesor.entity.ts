import { EvaluacionEntity } from 'src/evaluacion/evaluacion.entity/evaluacion.entity';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class ProfesorEntity {
    @PrimaryGeneratedColumn('uuid') //Creates the id
    id: string;

    @Column()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    departamento: string;

    @Column()
    extension: number;

    @Column()
    esParEvaluador: boolean;

    @OneToMany(() => ProyectoEntity, proyecto => proyecto.mentor)
    mentorias: ProyectoEntity[];

    @OneToMany(() => EvaluacionEntity, evaluacion => evaluacion.profesor)
    evaluaciones: EvaluacionEntity[];
}
