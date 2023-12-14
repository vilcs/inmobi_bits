import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppuserDto } from './dto/create-appuser.dto';
import { UpdateAppuserDto } from './dto/update-appuser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appuser } from './entities/appuser.entity';

@Injectable()
export class AppuserService {
  constructor(
    @InjectRepository(Appuser)
    private readonly appuserRepository: Repository<Appuser>){

  }
  async create(createAppuserDto: CreateAppuserDto) {
    const appuser = this.appuserRepository.create(createAppuserDto);
    return await this.appuserRepository.save(appuser);
  }

  async findAll() {
    return await this.appuserRepository.find();
  }

  async findOne(id: number) {
    return await this.appuserRepository.findOne({where: {id}});
  }

  async update(id: number, updateAppuserDto: UpdateAppuserDto) {
    const appuser = await this.findOne(id);
    if(!appuser){
      throw new NotFoundException();
    }
    Object.assign(appuser, UpdateAppuserDto);
    return await this.appuserRepository.save(appuser);
  }

  async remove(id: number) {
    const appuser = await this.findOne(id);
    if(!appuser){
      throw new NotFoundException();
    }
    Object.assign(appuser, UpdateAppuserDto);
    return await this.appuserRepository.remove(appuser);
  }
}
