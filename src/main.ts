import 'dotenv/config';
import 'reflect-metadata';
import { serverLogger } from './logger/server-logger/server-logger';
import { App } from './app';
import { RuntimeEnum } from './enums/runtime.enum';
import { ConsolaInstance } from 'consola';
import { defaultLogger } from './logger/default-logger/default-logger';
import { DataBase } from './db';
import { dataSource } from './db/data-source';
import { ItemModule } from './item/item.module';

class Main {
	constructor(
		private readonly server: App,
		private readonly db: DataBase,
		private readonly logger: ConsolaInstance,
	) {}

	public async bootstrap(): Promise<void> {
		this.logger.start('Application is starting...');
		await this.db.init();
		await this.server.start();
	}
}

const server = new App(
	(process.env.MODE as RuntimeEnum) || RuntimeEnum.dev,
	serverLogger,
	defaultLogger,
);

server.connectModule(ItemModule);
const db = new DataBase(dataSource, defaultLogger);
const main = new Main(server, db, defaultLogger);
main.bootstrap();
