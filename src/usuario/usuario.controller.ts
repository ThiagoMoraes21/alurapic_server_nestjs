import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
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
    public cria(@Body() usuario: Usuario, @Res() res): void {
        const usuarioCriado = this.usuarioService.cria(usuario);
        res.status(HttpStatus.CREATED)
            .location(`/users/${usuarioCriado.nomeDeUsuario}`)
            .json(usuarioCriado);
    }
}