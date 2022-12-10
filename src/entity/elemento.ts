import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class elemento extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_elemento: number;

    @Column()
    nombre_elemento: string;

    @Column()
    puntuacion: number;

    @Column()
    image: string;
    
    @Column()
    type: string;
}

