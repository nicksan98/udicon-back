import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_persona: number;

    @Column()
    first_name: string;

    @Column()
    lastName: string;

    @Column()
    document_type: string;

    @Column()
    document_number: string;

    @Column()
    telefono: number;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    genero: string;

    @Column()
    ases_type: string;
}

