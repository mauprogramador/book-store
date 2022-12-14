import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    try {
      const book = new Book();
      book.name = createBookDto.name;
      book.author = createBookDto.author;
      book.price = createBookDto.price;
      book.imageName = createBookDto.imageName;
      await this.bookRepository.save(book);
    } catch (error) {
      throw new InternalServerErrorException(
        'Error in saving the book in database',
      );
    }
  }

  async findAll() {
    try {
      return await this.bookRepository.find();
    } catch (error) {
      throw new NotFoundException('Books not found');
    }
  }

  async findOne(id: string) {
    try {
      return await this.bookRepository.findOneBy({ id });
    } catch (error) {
      throw new NotFoundException('Book not found');
    }
  }

  async remove(id: string) {
    const result = await this.bookRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException('Book not found');
    }
  }
}
