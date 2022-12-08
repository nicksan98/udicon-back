import { BaseEntity, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"; import { Cita } from "./cita.entity"; import { Asesoria } from "./asesoria.entity";

@Entity()
export class Historial_ase_cita extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_ase_cita: number;

    @ManyToOne(type => Cita)
    @JoinColumn({name: 'id_cita'})
    cita: Cita;

    @ManyToOne(type => Asesoria)
    @JoinColumn({name: 'id_asesoria'})
    asesoria: Asesoria;
}
