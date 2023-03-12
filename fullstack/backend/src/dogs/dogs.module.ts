import { CatsModule } from './../cats/cats.module';
import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Module({
  imports:[CatsModule],
  providers: [DogsService]
})
export class DogsModule {}
