import { DataSource } from 'typeorm';
import { ConsolaInstance } from 'consola';
import { dataSource } from './data-source';

export class DataBase {
	constructor(
		private readonly dataSource: DataSource,
		private readonly logger: ConsolaInstance,
	) {}

	public async init(): Promise<void> {
		this.logger.start('Connecting to database...');
		dataSource
			.initialize()
			.then(() => {
				this.logger.success('Database connected');
			})
			.catch((e) => {
				this.logger.error(e);
				process.exit(1);
			});
	}
}
