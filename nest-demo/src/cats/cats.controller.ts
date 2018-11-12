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
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post('create')
  @Header('content-type', 'application/json')
  create(@Body() createCatDto: CreateCatDto) {
    const createCat = createCatDto;
    console.log('createCatDto', createCat);
    if (createCat.hasOwnProperty('name')) {
      return 'This action adds a new cat';
    }
  }

  @Get('findAll')
  findAll(@Query() query, @Res() res) {
    res.status(HttpStatus.OK).json([query.limit]);
    // return `This action returns all cats (limit: ${query.limit} items)`;
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
