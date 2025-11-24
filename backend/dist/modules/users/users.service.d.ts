import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    createAdminUser(): Promise<User>;
    constructor(userRepository: Repository<User>);
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    updateProfile(id: string, updateData: Partial<User>): Promise<User>;
}
