import 'dotenv/config';
import 'reflect-metadata';
import { serverLogger } from './logger/server-logger/serverLogger';
import { App } from './app';
import { RuntimeEnum } from './enums/runtime.enum';
import { ConsolaInstance } from 'consola';
import { defaultLogger } from './logger/default-logger';
import { DataBase } from './db';
import { dataSource } from './db/data-source';

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
		this.logger.success('Application is started successfully');
	}
}

const server = new App((process.env.MODE as RuntimeEnum) || RuntimeEnum.dev, serverLogger);
const db = new DataBase(dataSource, defaultLogger);
const main = new Main(server, db, defaultLogger);
main.bootstrap();
