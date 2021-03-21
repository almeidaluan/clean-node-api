export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Param name: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
