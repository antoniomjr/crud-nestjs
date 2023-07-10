import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDTO, CreateTodoResponseDTO } from './dtos/create-todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  //   @Get()
  //   async index() {
  //     return await this.todoService.findAll();
  //   }

  // @Get()
  // async index(): Promise<CreateTodoResponseDTO> {
  //   try {
  //     return {
  //       status: 'success',
  //       code: HttpStatus.OK,
  //       errors: null,
  //       result: await this.todoService.findAll(),
  //     };
  //   } catch (err) {
  //     return {
  //       status: 'error',
  //       code: HttpStatus.INTERNAL_SERVER_ERROR,
  //       errors: err.errors,
  //       result: null,
  //     };
  //   }
  // }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.todoService.findOneById(id);
  }

  @Get()
  async findByName(@Query('name') name: string) {
    return await this.todoService.findOneByName(name);
  }

  @Post()
  async store(@Body() todo: CreateTodoDTO) {
    return await this.todoService.create(todo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() todo: Todo) {
    return await this.todoService.update(id, todo);
  }
}
