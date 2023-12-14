import { ShoppingcartService } from './shoppingcart.service';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from './dto/update-shoppingcart.dto';
export declare class ShoppingcartController {
    private readonly shoppingcartService;
    constructor(shoppingcartService: ShoppingcartService);
    create(createShoppingcartDto: CreateShoppingcartDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateShoppingcartDto: UpdateShoppingcartDto): string;
    remove(id: string): string;
}
