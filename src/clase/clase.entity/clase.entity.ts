import { BonoEntity } from 'src/bono/bono.entity/bono.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClaseEntity {
    @PrimaryGeneratedColumn('uuid') //Creates the id
    id: string;

    @Column()
    nombre: string;

    @Column()
    codigo: String;

    @Column()
    creditos: number;

    @OneToMany(() => BonoEntity, (bono) => bono.clase)
    bonos: BonoEntity[];
}
