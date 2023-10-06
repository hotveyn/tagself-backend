import { LoggerOptions } from 'pino';

export interface IServerLogger {
	dev: LoggerOptions;
	prod: boolean;
	test: boolean;
}
