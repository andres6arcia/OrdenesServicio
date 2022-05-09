import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export default class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    token: string
    @Column()
    technician_id: number
    @Column()
    description: string
    @Column()
    client_name: string
    @Column()
    client_address: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}