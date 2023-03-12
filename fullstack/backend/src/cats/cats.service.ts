import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Cat, CatDocument } from './cats.schema'
import { CreateCatDto } from './dto/create.dto'

export interface ICat {
	id: number
	name: string
}

@Injectable()
export class CatsService {
	constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }
	private cats = [
		{ id: 1, name: 'kitty' },
		{ id: 2, name: 'Ivan' },
		{ id: 3, name: 'VAsyakula' },
		{ id: 4, name: 'Sveta' },
	]

	getAll() {
		return this.catModel.find()
	}

	getOne(id: string) {
		return this.catModel.findById(id)
	}

	async create(createCatDto: CreateCatDto) {
		const newCat = new this.catModel(createCatDto)
		return await newCat.save()
	}

	async update(id: string, createCatDto: CreateCatDto) {
		return await this.catModel.updateOne({ _id: id }, createCatDto)
	}

	async delete(id: string) {
		return await this.catModel.deleteOne({ _id: id })
	}
}
