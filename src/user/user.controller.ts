import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(private userService: UserService, private configService: ConfigService) {
  }

  @Get('getUser')
  getUser() {
    console.log(this.configService.get('DB'));
    return this.userService.getUser();
  }
}
