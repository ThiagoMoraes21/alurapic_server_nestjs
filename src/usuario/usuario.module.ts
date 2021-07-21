import { UsuarioController } from './usuario.controller';
import { Module } from "@nestjs/common";

@Module({
    controllers: [UsuarioController]
})
export class UsuarioModule {}