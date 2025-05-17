import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { EvaluacionEntity } from 'src/evaluacion/evaluacion.entity/evaluacion.entity';
@Entity()
export class ProyectoEntity {
    @PrimaryGeneratedColumn('uuid') //Creates the id
    id: string;

    @Column()
    titulo: string;

    @Column()
    area: string;

    @Column({type: 'real'})
    presupuesto: number;

    @Column({type: 'real'})
    nota_final: number;

    @Column()
    estado: number;

    @Column()
    fecha_inicio: string;

    @Column()
    fecha_fin: string;

    @ManyToOne(() => EstudianteEntity, estudiante => estudiante.proyectos, { nullable: true, onDelete: 'SET NULL' })
    lider: EstudianteEntity | null;

    @ManyToOne(() => ProfesorEntity, profesor => profesor.mentorias)
    mentor: ProfesorEntity;

    @OneToMany(() => EvaluacionEntity, evaluacion => evaluacion.proyecto)
    evaluaciones: ProfesorEntity[];
}
