import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController], // Correto
})
export class UserModule {}
