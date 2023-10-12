import { RuntimeEnum } from '../enums/runtime.enum';

export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: string;
			MODE: RuntimeEnum;
			DB_HOST: string;
			DB_PORT: string;
			DB_USERNAME: string;
			DB_PASSWORD: string;
			DB_NAME: string;
		}
	}
}
