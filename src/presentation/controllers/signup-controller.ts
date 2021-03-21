import { InvalidParamError } from './../erros/invalid-param'
import { EmailValidator } from './../protocols/email-validator'
import { badRequest } from '../helpers/http-helper'
import { MissingParamError } from './../erros/missing-param'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpRequest, HttpResponse } from './../protocols/http'
export class SignUpController {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): any {
    const requiredParams = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredParams) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    const isValid = this.emailValidator.isValid(httpRequest.body.email)

    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
