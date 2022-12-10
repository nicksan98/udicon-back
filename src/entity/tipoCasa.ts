import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class house_type extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_house_type: number;

    @Column()
    name: string;

    @Column()
    image: string;
}

