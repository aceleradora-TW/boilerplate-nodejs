import { soma, subtracao, multiplicacao, divisao } from '../src/operations'

describe('operations', () => {
  it('deve fazer a soma de dois numeros', () => {
    const resultado = soma(5, 7)
    expect(resultado).toBe(12)
  })

  it('deve fazer a subtração de dois numeros', () => {
    const resultado = subtracao(5, 7)
    expect(resultado).toBe(-2)
  })

  it('deve fazer a mutiplicacao de dois numeros', () => {
    const resultado = multiplicacao(5, 7)
    expect(resultado).toBe(35)
  })

  it('deve fazer a divisao de dois numeros', () => {
    const resultado = divisao(70, 7)
    expect(resultado).toBe(10)
  })
})
