import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from './entity/usuario.entity';

@Controller('usuarios')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(
        @Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
        const usuario = this.usuarioService.buscaPorNomeDeUsuario(
            nomeDeUsuario
        );
        return usuario;
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        return this.usuarioService.cria(usuario);
    }
}