import { Injectable } from '@nestjs/common';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from './dto/update-shoppingcart.dto';

@Injectable()
export class ShoppingcartService {
  create(createShoppingcartDto: CreateShoppingcartDto) {
    return 'This action adds a new shoppingcart';
  }

  findAll() {
    return `This action returns all shoppingcart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingcart`;
  }

  update(id: number, updateShoppingcartDto: UpdateShoppingcartDto) {
    return `This action updates a #${id} shoppingcart`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingcart`;
  }
}
