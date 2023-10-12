import Fastify, { FastifyInstance } from 'fastify';
import { IServerLogger } from './logger/server-logger/server-logger.interface';
import { RuntimeEnum } from './enums/runtime.enum';
import { MagmaRouter } from './router';
import { ConsolaInstance } from 'consola';
import { BaseModule } from './base/module.base';

export class App {
	public readonly server: FastifyInstance;
	private modules: BaseModule[] = [];
	constructor(
		mode: RuntimeEnum,
		serverLogger: IServerLogger,
		private readonly logger: ConsolaInstance,
	) {
		this.server = Fastify({ logger: serverLogger[mode] });
	}

	public async start(): Promise<void> {
		this.logger.start('Server is starting...');
		await this.listen();
		this.logger.success('Server started successfully');
		this.logger.box('Available modules:' + ' ' + this.modules.join(' '));
	}

	public async listen(port: number = Number(process.env.PORT) || 5000): Promise<void> {
		await this.server.listen({ port }).catch((e) => {
			this.logger.error(e);
			process.exit(1);
		});
	}

	public connectModule<T extends BaseModule>(Module: new (fastify: FastifyInstance) => T): void {
		const module = new Module(this.server);
		this.modules.push(module.constructor.name);
	}
}
