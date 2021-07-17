import { transformUpperCase, concat, transformLowerCase } from '../src/string'

describe('Manipulação de Strings', () => {
  it('deve ser transformada em maiuscula', () => {
    const result = transformUpperCase('pokemon')
    expect(result).toBe('POKEMON')
  })
})
