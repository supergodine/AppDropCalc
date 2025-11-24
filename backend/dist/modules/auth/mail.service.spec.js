"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const typeorm_1 = require("@nestjs/typeorm");
const mail_service_1 = require("./mail.service");
const user_entity_1 = require("../users/entities/user.entity");
describe('MailService', () => {
    let service;
    let userRepository;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                mail_service_1.MailService,
                {
                    provide: (0, typeorm_1.getRepositoryToken)(user_entity_1.User),
                    useValue: {
                        findOne: jest.fn(),
                    },
                },
            ],
        }).compile();
        service = module.get(mail_service_1.MailService);
        userRepository = module.get((0, typeorm_1.getRepositoryToken)(user_entity_1.User));
    });
    it('deve retornar undefined se o usuário não existir', async () => {
        jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);
        const result = await service.sendPasswordRecovery('naoexiste@email.com', 'token123');
        expect(result).toBeUndefined();
    });
    it('deve enviar e-mail se o usuário existir (usando credenciais reais)', async () => {
        jest.spyOn(userRepository, 'findOne').mockResolvedValue({ email: process.env.GMAIL_USER });
        await expect(service.sendPasswordRecovery(process.env.GMAIL_USER, 'token123')).resolves.toBeUndefined();
    });
});
//# sourceMappingURL=mail.service.spec.js.map