import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDTO } from './dtos/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOneById(id: string): Promise<Todo | null> {
    const user = await this.todoRepository.findOneBy({ id: id });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async findOneByName(name: string): Promise<Todo> {
    const user = await this.todoRepository.findOne({ where: { name } });
    return user;
  }

  async create(todo: CreateTodoDTO): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    const user = await this.todoRepository.findOneBy({ id: id });

    if (!user) {
      throw new Error('User not found');
    }
    user.name = todo.name;
    user.description = todo.description;

    await this.todoRepository.update(user.id, todo);

    return user;
  }
}
