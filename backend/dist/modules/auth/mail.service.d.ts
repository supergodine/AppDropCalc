import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class MailService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    sendPasswordRecovery(email: string, token: string): Promise<void>;
}
