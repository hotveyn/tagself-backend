import { DataSource } from 'typeorm';
import { Item } from '../item/item.entity';

export const dataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'tagself',
	synchronize: true,
	logging: true,
	entities: [Item],
	subscribers: [],
	migrations: [],
});
