import Fastify, { FastifyInstance } from 'fastify';
import { IServerLogger } from './logger/server-logger/server-logger.interface';
import { RuntimeEnum } from './enums/runtime.enum';
import { ItemRoutes } from './item/item.routes';

export class App {
	server: FastifyInstance;

	constructor(mode: RuntimeEnum, logger: IServerLogger) {
		this.server = Fastify({ logger: logger[mode] });
	}

	public async start(): Promise<void> {
		this.server.register(ItemRoutes.makeRoutes);
		await this.server.listen();
	}

	async listen(port: number = Number(process.env.PORT) || 5000): Promise<void> {
		await this.server.listen({ port }).catch((e) => {
			console.log(e);
			process.exit(1);
		});
	}

	// async addRoutes(routes: any[]): Promise<void> {}
}
