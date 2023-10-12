import { Item } from './item.entity';

export class ItemService {
	constructor(private readonly ItemModel: typeof Item) {}

	public async getItems(): Promise<any> {
		// return this.Item.find();
		return { aboba: 'aboba' };
	}
}
