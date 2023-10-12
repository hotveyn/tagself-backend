import { DataSource } from 'typeorm';
import { Item } from '../item/item.entity';
import { Person } from '../person/person.entity';

export const dataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: ['error', 'warn'],
	entities: [Item, Person],
	subscribers: [],
	migrations: [],
});
