import { CalculationsService } from './calculations.service';
import { CreateCalculationDto } from './dto/create-calculation.dto';
export declare class CalculationsController {
    private readonly calculationsService;
    constructor(calculationsService: CalculationsService);
    create(req: any, createCalculationDto: CreateCalculationDto): Promise<{
        calculation: import("./entities/calculation.entity").Calculation;
        result: import("./entities/calculation.entity").CalculationResult;
        message: string;
    }>;
    findAll(req: any, page?: number, limit?: number, search?: string, category?: string, favorite?: boolean): Promise<{
        calculations: import("./entities/calculation.entity").Calculation[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    }>;
    findOne(req: any, id: string): Promise<{
        calculation: import("./entities/calculation.entity").Calculation;
        message: string;
    }>;
    simulate(req: any, id: string): Promise<{
        scenarios: {
            conservative: import("./entities/calculation.entity").CalculationResult;
            balanced: import("./entities/calculation.entity").CalculationResult;
            aggressive: import("./entities/calculation.entity").CalculationResult;
        };
        message: string;
    }>;
    toggleFavorite(req: any, id: string): Promise<{
        isFavorite: boolean;
        message: string;
    }>;
    toggleArchive(req: any, id: string): Promise<{
        isArchived: boolean;
        message: string;
    }>;
    getStats(req: any): Promise<{
        stats: any;
        message: string;
    }>;
    quickCalculation(req: any, createCalculationDto: CreateCalculationDto): Promise<{
        result: import("./entities/calculation.entity").CalculationResult;
        message: string;
        note: string;
    }>;
}
