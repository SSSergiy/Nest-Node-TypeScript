import { IsNumber,IsString } from 'class-validator'

export class CreateCatDto{
	// @IsNumber()
	// id: number
	@IsString()
	name: string
	@IsNumber()
	age: number
	@IsString()
	breed: string
}