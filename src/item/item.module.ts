import { FastifyInstance } from 'fastify';
import { ItemService } from './item.service';
import { Item } from './item.entity';
import { ItemController } from './item.controller';
import { ItemRouter } from './item.routes';
import { BaseModule } from '../base/module.base';

export class ItemModule extends BaseModule {
	constructor(private readonly fastify: FastifyInstance) {
		super();
		const service = new ItemService(Item);
		const controller = new ItemController(service);
		// controller.asd();
		const router = new ItemRouter(this.fastify, controller);
	}
}
