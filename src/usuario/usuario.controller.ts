import { Body, Controller, Post } from "@nestjs/common";

@Controller('usuarios')
export class UsuarioController {
    private usuarios = [];

    @Post()
    public cria(@Body() usuario) {
        this.usuarios.push(usuario);
        return usuario;
    }
}