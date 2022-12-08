import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"; import { Persona } from "./persona.entity";

@Entity()
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    user_type: string;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @ManyToOne(type => Persona)
    @JoinColumn({name: 'id_persona'})
    persona: Persona;

}