import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    createAdminUser(): Promise<{
        id: string;
        email: string;
        name: string;
        plan: import("./entities/user.entity").UserPlan;
        role: import("./entities/user.entity").UserRole;
        status: import("./entities/user.entity").UserStatus;
    }>;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
    getAllUsers(): Promise<import("./entities/user.entity").User[]>;
}
