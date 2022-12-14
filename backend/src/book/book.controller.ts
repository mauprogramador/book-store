import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get('/list')
  findAll() {
    return this.bookService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
