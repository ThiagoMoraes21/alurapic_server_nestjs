import { UsuarioService } from './usuario.service';
import { Body, Controller, Post } from "@nestjs/common";

@Controller('usuarios')
export class UsuarioController {
    private usuarioService = new UsuarioService();

    @Post()
    public cria(@Body() usuario) {
        return this.usuarioService.cria(usuario);
    }
}