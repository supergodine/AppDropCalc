import { Controller, All, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('*')
export class GlobalOptionsController {
  @All()
  handleOptions(@Req() req: Request, @Res() res: Response) {
    res.header('Access-Control-Allow-Origin', 'https://app-drop-calc.vercel.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    return res.status(200).json({ ok: true });
  }
}
