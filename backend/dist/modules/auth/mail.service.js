"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const nodemailer = require("nodemailer");
let MailService = class MailService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async sendPasswordRecovery(email, token) {
        console.log(`[MailService] Iniciando recuperação de senha para: ${email}`);
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            console.log(`[MailService] Usuário não encontrado: ${email}`);
            return;
        }
        user.passwordResetToken = token;
        user.passwordResetExpires = new Date(Date.now() + 60 * 60 * 1000);
        await this.userRepository.save(user);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
        });
        const recoveryUrl = `${process.env.FRONTEND_URL || 'https://app-drop-calc.vercel.app'}/reset-password?token=${token}`;
        console.log(`[MailService] Enviando e-mail de recuperação para: ${email} com link: ${recoveryUrl}`);
        await transporter.sendMail({
            from: `DropCalc <${process.env.GMAIL_USER}>`,
            to: email,
            subject: 'Recuperação de senha - DropCalc',
            html: `<p>Olá,</p><p>Recebemos uma solicitação para redefinir sua senha. Clique no link abaixo para continuar:</p><p><a href="${recoveryUrl}">${recoveryUrl}</a></p><p>Se você não solicitou, ignore este e-mail.</p>`
        });
        console.log(`[MailService] E-mail enviado para: ${email}`);
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MailService);
//# sourceMappingURL=mail.service.js.map