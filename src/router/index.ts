import { FastifyInstance } from 'fastify';
import { BaseRouter } from './router.interface';

/*
 * MagmaRouter class. Class that handles the creation of routes for the REST API.
 *
 * @class MagmaRouter
 */
export class MagmaRouter {
	constructor(
		private readonly fastify: FastifyInstance,
		private readonly routers: BaseRouter[],
	) {}

	public init(): void {
		this.routers.forEach((router) => {
			router.makeRoutes(this.fastify);
		});
	}
}
