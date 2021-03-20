import { badRequest } from '../helpers/http-helper'
import { MissingParam } from './../erros/missing-param'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpRequest, HttpResponse } from './../protocols/http'
export class SignUpController {
  handle (httpRequest: HttpRequest): any {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParam('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParam('email'))
    }
  }
}
