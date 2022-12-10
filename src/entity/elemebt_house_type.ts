import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class elemebt_house_type extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_house_type: number;

    @Column()
    id_element: number;
}

