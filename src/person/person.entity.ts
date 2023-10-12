import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('persons')
export class Person {
	@PrimaryColumn()
	login: string;

	@Column()
	password: string;

	@Column()
	nickname: string;
}
