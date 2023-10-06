import { FastifyInstance } from 'fastify';

export class ItemRoutes {
	static async makeRoutes(fastify: FastifyInstance): Promise<void> {
		fastify.get('/items/all', async (req, res) => {
			return { hello: 'world' };
		});
	}
}
