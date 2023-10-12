import { IServerLogger } from './server-logger.interface';

export const serverLogger: IServerLogger = {
	dev: {
		transport: {
			target: 'pino-pretty',
			options: {
				translateTime: 'HH:MM:ss Z',
				ignore: 'pid,hostname',
			},
		},
	},
	prod: true,
	test: false,
};
