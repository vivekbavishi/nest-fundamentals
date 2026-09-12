import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create(createUserDto: CreateUserDto) {
    const user = { ...createUserDto, id: this.users.length + 1 };
    this.users.push(user);
    return user;
  }

  findAll(role?: string) {
    if (!role) {
      return this.users;
    }
    return this.users.filter(user => user.role === role);
  }

  findOne(id: number) {
    const findindex = this.users.findIndex(user => user.id === id);
    if (findindex === -1) {
      throw new Error(`User with id ${id} not found`);
    }
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error(`User with id ${id} not found`);;
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error(`User with id ${id} not found`);
    }
    return this.users.splice(userIndex, 1)[0];
  }
}
