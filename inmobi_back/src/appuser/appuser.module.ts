import { Module } from '@nestjs/common';
import { AppuserService } from './appuser.service';
import { AppuserController } from './appuser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appuser } from './entities/appuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appuser])],
  controllers: [AppuserController],
  providers: [AppuserService],
})
export class AppuserModule {}
