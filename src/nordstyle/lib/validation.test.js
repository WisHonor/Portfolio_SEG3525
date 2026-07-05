import { describe, it, expect } from 'vitest'
import { validateInfo, validatePayment } from './validation.js'

describe('validateInfo', () => {
  it('flags empty required fields', () => {
    const e = validateInfo({ name: '', email: '', address: '' })
    expect(Object.keys(e).sort()).toEqual(['address', 'email', 'name'])
  })
  it('flags a malformed email', () => {
    expect(validateInfo({ name: 'A', email: 'bad', address: 'X' }).email).toBeTruthy()
  })
  it('passes valid info', () => {
    expect(validateInfo({ name: 'Ana', email: 'a@b.ca', address: '1 rue' })).toEqual({})
  })
})

describe('validatePayment', () => {
  it('rejects short card number', () => {
    expect(validatePayment({ card: '1234', expiry: '12/28', cvv: '123' }).card).toBeTruthy()
  })
  it('accepts 16 digits with spaces', () => {
    expect(validatePayment({ card: '4111 1111 1111 1111', expiry: '12/28', cvv: '123' }).card).toBeUndefined()
  })
  it('rejects bad expiry month', () => {
    expect(validatePayment({ card: '4111111111111111', expiry: '13/28', cvv: '123' }).expiry).toBeTruthy()
  })
  it('rejects 2-digit cvv', () => {
    expect(validatePayment({ card: '4111111111111111', expiry: '12/28', cvv: '12' }).cvv).toBeTruthy()
  })
  it('passes valid payment', () => {
    expect(validatePayment({ card: '4111111111111111', expiry: '12/28', cvv: '123' })).toEqual({})
  })
})
