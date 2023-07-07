import { ApostadorDTO } from './dto/apostador.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { APOSTADOR } from 'src/common/models/models';
import { IApostador } from 'src/common/interfaces/apostador.interface';

@Injectable()
export class ApostadorService {
  constructor(@InjectModel(APOSTADOR.name) private readonly model: Model<IApostador>) {}

  
  async create(apostadorDTO: ApostadorDTO): Promise<IApostador> {
    const newApostador = new this.model(apostadorDTO);
    return await newApostador.save();
  }

  async findAll(): Promise<IApostador[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IApostador> {
    return await this.model.findById(id);
  }

  async update(id: string, apostadorDTO: ApostadorDTO): Promise<IApostador> {
    return await this.model.findByIdAndUpdate(id, apostadorDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
