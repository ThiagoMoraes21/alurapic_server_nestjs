import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";

@Catch()
export class FiltroDeExecaoHttp implements ExceptionFilter {

    private httpAdapter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }

    catch(exception: Error, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const req = context.getRequest<Request>();
        const res = context.getResponse<Response>();

        const { status, body } = exception instanceof HttpException ?
            {
                status: exception.getStatus(),
                body: exception.getResponse()
            } :
            {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                body: {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    message: exception.message,
                    path: req.url
                }
            }
        
        this.httpAdapter.reply(res, body, status);
    }
}