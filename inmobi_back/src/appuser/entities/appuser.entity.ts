import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'appuser'})
export class Appuser {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    username: string;

    @Column({ type: 'varchar' })
    firstname: string;

    @Column({ type: 'varchar' })
    lastname: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({type: 'int', default: 1})
    status: number;

}
