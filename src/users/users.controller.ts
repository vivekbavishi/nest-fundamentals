import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity.js';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiCreatedResponse({ description: 'The created user.', type: User })
  @ApiBadRequestResponse({ description: 'The request body failed validation.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'List users' })
  @ApiQuery({ name: 'role', required: false, type: String, description: 'Filter users by role.' })
  @ApiOkResponse({ description: 'Matching users.', type: User, isArray: true })
  findAll(@Query('role') role?: string) {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'The user ID.' })
  @ApiOkResponse({ description: 'The requested user.', type: User })
  @ApiInternalServerErrorResponse({ description: 'The user does not exist.' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiParam({ name: 'id', type: Number, description: 'The user ID.' })
  @ApiOkResponse({ description: 'The updated user.', type: User })
  @ApiBadRequestResponse({ description: 'The request body failed validation.' })
  @ApiInternalServerErrorResponse({ description: 'The user does not exist.' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiParam({ name: 'id', type: Number, description: 'The user ID.' })
  @ApiOkResponse({ description: 'The deleted user.', type: User })
  @ApiInternalServerErrorResponse({ description: 'The user does not exist.' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
