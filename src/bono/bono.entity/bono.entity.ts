import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { ClaseEntity } from 'src/clase/clase.entity/clase.entity';

@Entity()
export class BonoEntity {
    @PrimaryGeneratedColumn('uuid') //Creates the id
    id: string;

    @ManyToOne(() => UsuarioEntity, (usuario) => usuario.bonos)
    usuario: UsuarioEntity;

    @ManyToOne(() => ClaseEntity, (clase) => clase.bonos)
    clase: ClaseEntity;

    @Column()
    monto: number;

    @Column()
    calificacion: number;

    @Column()
    palabras_clave: string;
}
