import { NestResponseBuilder } from './../core/http/nest-response-builder';
import { NestResponse } from './../core/http/nest-response';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
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

        if(!usuario) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuário não encontrado.'
            });
        }

        return usuario;
    }

    @Post()
    public cria(@Body() usuario: Usuario): NestResponse {
        const usuarioCriado = this.usuarioService.cria(usuario);
        return new NestResponseBuilder()
            .status(HttpStatus.CREATED)
            .headers({
                'Location': `/users/${usuarioCriado.nomeDeUsuario}`
            })
            .body(usuarioCriado)
            .build();
    }
}