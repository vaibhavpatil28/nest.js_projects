import {
  Controller,
  Get,
  Post,
  HttpCode,
  Param,
  Put,
  Body,
  Delete,
  Query,
  Header,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Post('create')
  @Header('content-type', 'application/json')
  async create(@Body() createCatDto: CreateCatDto) {
    if (createCatDto.hasOwnProperty('name')) {
      this.catsService.create(createCatDto);
    }
  }

  // @Get('findAll')
  // async findAll(@Query() query, @Res() res) {
  //   return this.catsService.findAll();
  // }
  @Get('findAll')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} cat`;
  }
  @Get()
  omkar(@Req() id) {
    return `This action returns a #${id.params} cat`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }
}
