import { CatsService } from './../cats/cats.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
	constructor(private catsService:CatsService) {
	
	}
	dogKilledCat(id:string) {
	this.catsService.delete(id)
	}
}
