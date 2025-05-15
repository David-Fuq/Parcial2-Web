import { BonoEntity } from 'src/bono/bono.entity/bono.entity';
import { ClaseEntity } from 'src/clase/clase.entity/clase.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid') //Creates the id
    id: string;

    @Column()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    grupo_inv: string;

    @Column()
    numero_ext: number;

    @ManyToOne(() => UsuarioEntity, (usuario) => usuario.subordinados)
    jefe: UsuarioEntity

    @OneToMany(() => UsuarioEntity, (usuario) => usuario.jefe)
    subordinados: UsuarioEntity[];

    @OneToMany(() => BonoEntity, (bono) => bono.usuario)
    bonos: BonoEntity[];


}
