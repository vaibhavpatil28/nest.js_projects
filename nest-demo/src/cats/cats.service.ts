import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>, @InjectModel('CatOld') private readonly catOldModel: Model<Cat>) {}
    async create(createCatDto: CreateCatDto): Promise<Cat> {
      const createdCat = new this.catModel(createCatDto);
      return await createdCat.save();
    }
  
    async findAll(): Promise<Cat[]> {
      let cat= await this.catModel.find();
      let cat1 = await this.catOldModel.find();
      cat.push(...cat1);
      console.log('cat', cat)
      return cat;
    }
}
