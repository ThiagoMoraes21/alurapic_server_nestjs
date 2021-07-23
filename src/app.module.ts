import { TransformaRespostaInterceptor } from './core/http/transforma-resposta.interceptor';
import { FiltroDeExecaoHttp } from './common/filtros/filtro-de-execao-http.filter';
import { UsuarioModule } from './usuario/usuario.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

@Module({
    imports: [
        UsuarioModule
    ],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: ClassSerializerInterceptor
        },
        {
            provide: APP_FILTER,
            useClass: FiltroDeExecaoHttp
        }, 
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformaRespostaInterceptor
        }
    ],
})
export class AppModule { }
