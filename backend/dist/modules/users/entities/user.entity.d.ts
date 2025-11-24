export declare enum UserPlan {
    FREE = "free",
    PRO = "pro",
    PREMIUM = "premium"
}
export declare enum UserStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    SUSPENDED = "suspended"
}
export declare enum UserRole {
    USER = "user",
    ADMIN = "admin"
}
export declare class User {
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    id: string;
    name: string;
    email: string;
    passwordHash?: string;
    currencyDefault: string;
    country: string;
    plan: UserPlan;
    status: UserStatus;
    role: UserRole;
    googleId?: string;
    avatar?: string;
    phone?: string;
    bio?: string;
    preferences?: {
        theme?: 'light' | 'dark' | 'auto';
        language?: string;
        timezone?: string;
        notifications?: {
            email?: boolean;
            push?: boolean;
        };
    };
    lastLoginAt?: Date;
    calculationsCount: number;
    planExpiresAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    canCreateCalculation(): boolean;
    isPlanActive(): boolean;
    isAdmin(): boolean;
    getDisplayName(): string;
}
