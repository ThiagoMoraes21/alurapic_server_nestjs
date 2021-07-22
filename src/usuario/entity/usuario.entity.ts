import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsUsernameAlreadyExist } from "../custom-validators/is-username-already-exists.validator";

export class Usuario {
    @IsNumber()
    id: number;

    @IsUsernameAlreadyExist({
        message: 'Nome de usuário precisa ser único.'
    })
    @IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório.'
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser uma string.'
    })
    nomeDeUsuario: string;

    @IsEmail({}, {
        message: 'email precisar ser um endereço de email válido.'
    })
    email: string;

    @IsNotEmpty({
        message: 'senha é obrigatório.'
    })
    senha: string;

    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório'
    })
    nomeCompleto: string;

    dataDeEntrada: Date;
}