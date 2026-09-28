
import { Controller, Get, Header } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiProduces, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('App')
export class AppController {

  @Get()
  @Header('Content-Type', 'text/html')
  @ApiOperation({ summary: 'Get the application homepage link' })
  @ApiProduces('text/html')
  @ApiOkResponse({ description: 'HTML link to the project repository.' })
  getHello(): string {
    const githubUrl = 'https://github.com/vivekbavishi/nest-fundamentals';
    return `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer">${githubUrl}</a>`;
  }
}
