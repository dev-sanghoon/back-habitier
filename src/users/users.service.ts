import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers() {
    return [{ id: 'cape@habitier.com' }, { id: 'paul133@gmail.com' }];
  }
}
