import { IsNotEmpty } from 'class-validator';
import { DefaultResponseDTO } from './default-response.dto';
import { Todo } from '../entities/todo.entity';

export class CreateTodoDTO {
  @IsNotEmpty({ message: 'Name is required' })
  readonly name: string;
}

export class CreateTodoResponseDTO extends DefaultResponseDTO<Todo[]> {}
