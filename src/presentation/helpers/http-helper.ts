/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpStatusCode } from '@/business/constants';
import { type HttpResponse } from '@/presentation/protocols';
import { InternalServerError, UnauthorizedError } from './errors';

export function ok<T>(data: T): HttpResponse<T> {
    return { statusCode: HttpStatusCode.Ok, body: data };
}

export function created<T>(data: T): HttpResponse<T> {
    return { statusCode: HttpStatusCode.Created, body: data };
}

export function noContent(): HttpResponse {
    return { statusCode: HttpStatusCode.NoContent, body: null };
}

export function badRequest(error: Error): HttpResponse {
    return { statusCode: HttpStatusCode.BadRequest, body: error };
}

export function unauthorized(): HttpResponse {
    return { statusCode: HttpStatusCode.Unauthorized, body: new UnauthorizedError() };
}

export function forbidden(error: Error): HttpResponse {
    return { statusCode: HttpStatusCode.Forbidden, body: error };
}

export function serverError(error: Error): HttpResponse {
    return { statusCode: HttpStatusCode.InternalServerError, body: new InternalServerError(error.stack) };
}
