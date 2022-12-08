import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cita extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_cita: number;

    @Column()
    fecha_cita: Date;

    @Column()
    hora_cita: string;
}
