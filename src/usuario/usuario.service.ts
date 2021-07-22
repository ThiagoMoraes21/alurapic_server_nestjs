import { Injectable } from "@nestjs/common";
import { Usuario } from "./entity/usuario.entity";

@Injectable()
export class UsuarioService {
    private usuarios: Usuario[] = [{
        id: 1,
        nomeDeUsuario: 'thiago',
        email: 'test@test.com',
        senha: '12345',
        nomeCompleto: 'thiago moraes',
        dataDeEntrada: new Date()
    }];

    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);
        return usuario;
    }

    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => 
            usuario.nomeDeUsuario  === nomeDeUsuario
        );
    }
}