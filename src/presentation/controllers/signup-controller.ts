
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MissingParamError, InvalidParamError, ServerError } from './../erros'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse, EmailValidator } from './../protocols'

export class SignUpController {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): any {
    try {
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
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }
  }
}
