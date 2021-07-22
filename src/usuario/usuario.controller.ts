import { UsuarioService } from './usuario.service';
import { Body, Controller, Post } from "@nestjs/common";
import { Usuario } from './entity/usuario.entity';

@Controller('usuarios')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        return this.usuarioService.cria(usuario);
    }
}