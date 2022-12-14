export class BookDto {
  id!: string;
  name!: string;
  author!: string;
  price!: number;
  imageName!: string;
}

export class CreateBookDto {
  name!: string;
  author!: string;
  price!: number;
  imageName!: string;
}
