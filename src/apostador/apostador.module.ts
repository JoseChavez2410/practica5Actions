import { Module } from '@nestjs/common';
import { ApostadorService } from './apostador.service';
import { ApostadorSchema } from './schema/apostador.schema';
import { APOSTADOR } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ApostadorController } from './apostador.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: APOSTADOR.name,
        useFactory: () => ApostadorSchema,
      },
    ]),
  ],
  controllers: [ApostadorController],
  providers: [ApostadorService],
})
export class ApostadorModule {}
