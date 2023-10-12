import { ItemService } from './item.service';
import { FastifyReply, FastifyRequest } from 'fastify';

export class ItemController {
	constructor(private readonly ItemService: ItemService) {}

	public async asd(request: FastifyRequest, reply: FastifyReply) {
		console.log(this.ItemService);
		reply.status(200).send();
	}
}
