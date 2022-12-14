import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: 'admin',
      database: 'bookstore',
      entities: [Book],
      logging: true,
      synchronize: true,
    }),
    BookModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
