import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty({ example: 1, description: 'The user ID.' })
    id: number;

    @ApiProperty({ example: 'Ada Lovelace' })
    name: string;

    @ApiProperty({ example: 'ada@example.com' })
    email: string;

    @ApiProperty({ example: 'correct-horse-battery', description: 'The password is currently included in API responses.' })
    password: string;

    @ApiProperty({ example: 'admin' })
    role: string;
}
