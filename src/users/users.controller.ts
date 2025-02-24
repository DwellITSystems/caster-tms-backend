import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import mongoose from 'mongoose';
import { updateUserDto } from './dto/updateUsers.dto';
import { createUserDto } from './dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('user-check/:id')
    async getUserDuplicate(@Param('id') id: string) {
        return await this.usersService.getUserDuplicate(id);
    }

    @Get()
    async getUsers() {
        return await this.usersService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const findUser = await this.usersService.getUserById(id);
        if (!findUser) throw new NotFoundException('User not found');
        return findUser;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateUser(@Param('id') id: string, @Body() dto: updateUserDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const updateUser = await this.usersService.updateUser(id, dto);
        if (!updateUser) throw new NotFoundException('User not found');
        return updateUser;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new BadRequestException('Invalid ID');

        const deleteUser = await this.usersService.deleteUser(id);
        if (!deleteUser) throw new NotFoundException('User not found');
        return { message: 'User deleted successfully' };
    }
}
