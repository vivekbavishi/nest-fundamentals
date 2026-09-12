import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto.js';
import { IsString, IsEmail, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString({message: 'Name must be a string'})
    name?: string;

    @IsEmail({},{message: 'Email must be a valid email address'})
    email?: string;

    @MinLength(6, {message: 'Password must be at least 6 characters long'})
    password?: string;

    @IsString({message: 'Role must be a string'})
    role?: string;
}


