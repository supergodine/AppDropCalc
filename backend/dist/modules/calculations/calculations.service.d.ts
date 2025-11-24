import { Repository } from 'typeorm';
import { Calculation } from './entities/calculation.entity';
import { CreateCalculationDto } from './dto/create-calculation.dto';
import { PricingService } from './services/pricing.service';
import { ExchangeService } from '../exchange/exchange.service';
import { PresetsService } from '../presets/presets.service';
import { AuthService } from '../auth/auth.service';
export interface CalculationFilters {
    page: number;
    limit: number;
    search?: string;
    category?: string;
    favorite?: boolean;
}
export declare class CalculationsService {
    private readonly calculationRepository;
    private readonly pricingService;
    private readonly exchangeService;
    private readonly presetsService;
    private readonly authService;
    private readonly logger;
    constructor(calculationRepository: Repository<Calculation>, pricingService: PricingService, exchangeService: ExchangeService, presetsService: PresetsService, authService: AuthService);
    create(userId: string, dto: CreateCalculationDto): Promise<{
        calculation: Calculation;
        result: import("./entities/calculation.entity").CalculationResult;
        message: string;
    }>;
    quickCalculation(userId: string, dto: CreateCalculationDto): Promise<{
        result: import("./entities/calculation.entity").CalculationResult;
        message: string;
        note: string;
    }>;
    findAll(userId: string, filters: CalculationFilters): Promise<{
        calculations: Calculation[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    findOne(userId: string, id: string): Promise<{
        calculation: Calculation;
        message: string;
    }>;
    simulate(userId: string, id: string): Promise<{
        scenarios: {
            conservative: import("./entities/calculation.entity").CalculationResult;
            balanced: import("./entities/calculation.entity").CalculationResult;
            aggressive: import("./entities/calculation.entity").CalculationResult;
        };
        message: string;
    }>;
    toggleFavorite(userId: string, id: string): Promise<{
        isFavorite: boolean;
        message: string;
    }>;
    toggleArchive(userId: string, id: string): Promise<{
        isArchived: boolean;
        message: string;
    }>;
    getStats(userId: string): Promise<{
        stats: any;
        message: string;
    }>;
    private preparePricingInput;
}
