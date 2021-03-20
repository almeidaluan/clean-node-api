import { MissingParam } from './../erros/missing-param'
import { SignUpController } from './signup-controller'

const makeSUT = (): SignUpController => {
  return new SignUpController()
}

describe('', () => {
  it('Should return 400 if no email is provided', () => {
    const sut = makeSUT()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParam('email'))
  })

  it('Should return 400 if no name is provided', () => {
    const sut = makeSUT()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParam('name'))
  })

  it('Should return 400 if no password is provided', () => {
    const sut = makeSUT()
    const httpRequest = {
      body: {
        email: 'any_email',
        passwordConfirmation: 'any_password',
        name: 'any_name'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParam('password'))
  })

  it('Should return 400 if no confirmationPassword is provided', () => {
    const sut = makeSUT()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        name: 'any_name'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParam('confirmationPassword'))
  })
})
