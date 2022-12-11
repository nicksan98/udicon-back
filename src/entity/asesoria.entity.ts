import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Asesoria extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_asesoria: number;

    @Column()
    tipo_asesoria: string;

    @Column()
    costo: number;

    @Column()
    id_cliente: number;

    @Column()
    id_asesor: number;
}