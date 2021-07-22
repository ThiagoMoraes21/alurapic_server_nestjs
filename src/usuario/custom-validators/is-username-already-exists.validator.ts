import { UsuarioService } from './../usuario.service';
import { 
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint()
export class IsUsernameAlreadyExistConstraint implements ValidatorConstraintInterface {
    constructor(private usuarioService: UsuarioService){}

    validate(value: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usuarioService.buscaPorNomeDeUsuario(value);
    }
}

export function IsUsernameAlreadyExist(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsUsernameAlreadyExistConstraint
        });
    }
}