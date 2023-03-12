import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './cats/cats.module'
import { DogsModule } from './dogs/dogs.module';
//ето контейнер
@Module({
	imports: [CatsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017'), DogsModule],
	// imports: [CatsModule,MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.0ftqbic.mongodb.net/?retryWrites=true&w=majority')],
	controllers: [AppController], //класс который обрабатывает запроссы
	providers: [AppService], //выполняют какуюто логику
	
})
export class AppModule {}
