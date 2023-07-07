import { ApostadorService } from './apostador.service';
import { ApostadorDTO } from './dto/apostador.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ApostadorMsg } from 'src/common/constants';

@Controller()
export class ApostadorController {
  constructor(private readonly apostadorService: ApostadorService) {}

  @MessagePattern(ApostadorMsg.CREATE)
  create(@Payload() apostadorDTO: ApostadorDTO) {
    return this.apostadorService.create(apostadorDTO);
  }

  @MessagePattern(ApostadorMsg.FIND_ALL)
  findAll() {
    return this.apostadorService.findAll();
  }

  @MessagePattern(ApostadorMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.apostadorService.findOne(id);
  }
  @MessagePattern(ApostadorMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.apostadorService.update(payload.id, payload.apostadorDTO);
  }

  @MessagePattern(ApostadorMsg.DELETE)
  delete(@Payload() id: string) {
    return this.apostadorService.delete(id);
  }
}
