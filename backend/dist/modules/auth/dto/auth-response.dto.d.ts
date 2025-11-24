import { User } from '../../users/entities/user.entity';
export declare class UserResponseDto {
    id: string;
    name: string;
    email: string;
    currencyDefault: string;
    country: string;
    plan: string;
    status: string;
    role: string;
    avatar?: string;
    calculationsCount: number;
    createdAt: Date;
    constructor(user: User);
}
export declare class AuthResponseDto {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    user: UserResponseDto;
    message: string;
}
