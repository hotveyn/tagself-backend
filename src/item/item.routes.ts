import { FastifyInstance } from 'fastify';
import { ItemController } from './item.controller';
import { BaseRouter } from '../router/router.interface';

export class ItemRouter extends BaseRouter {
	constructor(
		private readonly fastify: FastifyInstance,
		private readonly ItemController: ItemController,
	) {
		super();
		this.fastify.get('/items', this.ItemController.asd);
	}
}
