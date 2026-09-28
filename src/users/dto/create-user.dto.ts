import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'Ada Lovelace', description: 'The user name.' })
    @IsString({message: 'Name must be a string'})
    name: string;

    @ApiProperty({ example: 'ada@example.com', description: 'A valid email address.' })
    @IsEmail({},{message: 'Email must be a valid email address'})
    email: string;

    @ApiProperty({ example: 'correct-horse-battery', minLength: 6, description: 'The user password.' })
    @MinLength(6, {message: 'Password must be at least 6 characters long'})
    password: string;

    @ApiProperty({ example: 'admin', description: 'The user role.' })
    @IsString({message: 'Role must be a string'})
    role: string;
}
