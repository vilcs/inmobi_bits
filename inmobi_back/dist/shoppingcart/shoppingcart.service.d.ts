import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from './dto/update-shoppingcart.dto';
export declare class ShoppingcartService {
    create(createShoppingcartDto: CreateShoppingcartDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateShoppingcartDto: UpdateShoppingcartDto): string;
    remove(id: number): string;
}
