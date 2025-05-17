import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn('uuid') //Creates the id
    id: string;

    @Column()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    semestre: number;

    @Column()
    programa: string;

    @Column({type: 'real'})
    promedio: number;

    @OneToMany(() => ProyectoEntity, proyecto => proyecto.lider)
    proyectos: ProyectoEntity[];
}
