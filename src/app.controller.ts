
import { Controller, Get, Header } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): string {
    const githubUrl = 'https://github.com/vivekbavishi/nest-fundamentals';
    return `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer">${githubUrl}</a>`;
  }
}
