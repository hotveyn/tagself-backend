import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' })
export class Item {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column('text')
	description: string;
}
