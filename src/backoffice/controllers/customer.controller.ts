import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

//localhost:3000/customer
@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Obter os Clientes ';
  }

  @Get(':document')
  getById(@Param('document') document) {
    return 'Obter os Clientes ' + document;
  }

  @Post()
  post(@Body() body) {
    return body;
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return {
      customer: document,
      data: body,
    };
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return 'Remover um  Clientes ' + document;
  }
}
