import { Controller, Get, Post, Body,ValidationPipe, Delete, Param, ParseIntPipe, Put, BadRequestException } from '@nestjs/common'
import { CatsService, ICat } from './cats.service'
import { CreateCatDto } from './dto/create.dto'
import mongoose from 'mongoose'

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) {}
	@Get()
	getAll() {
		return this.catsService.getAll()
	}

	@Get(":id")
	getOne(@Param("id") id: string) {
		if (!mongoose.isValidObjectId(id)) {
			throw new BadRequestException("id is not correct ")
		}
		return this.catsService.getOne(id)
	}

	@Post()
	create(@Body() body:CreateCatDto) {
	return this.catsService.create(body)
	}

	@Put(":id")
	update(@Param("id") id: string, @Body() body: CreateCatDto) {
		if (!mongoose.isValidObjectId(id)) {
			throw new BadRequestException("id is not correct ")
		}
	return this.catsService.update(id,body)
	}

	@Delete(":id")
	delete(@Param("id") id: string) {
		if (!mongoose.isValidObjectId(id)) {
			throw new BadRequestException("id is not correct ")
		}
	return this.catsService.delete(id)
	}
}
