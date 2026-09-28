import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto.js';
import { IsString, IsEmail, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional({ example: 'Ada Lovelace', description: 'The user name.' })
    @IsString({message: 'Name must be a string'})
    name?: string;

    @ApiPropertyOptional({ example: 'ada@example.com', description: 'A valid email address.' })
    @IsEmail({},{message: 'Email must be a valid email address'})
    email?: string;

    @ApiPropertyOptional({ example: 'correct-horse-battery', minLength: 6, description: 'The user password.' })
    @MinLength(6, {message: 'Password must be at least 6 characters long'})
    password?: string;

    @ApiPropertyOptional({ example: 'admin', description: 'The user role.' })
    @IsString({message: 'Role must be a string'})
    role?: string;
}


