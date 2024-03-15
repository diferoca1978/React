import { getGreet } from "../../src/base-tests/02-template-string"

describe('Test over getGreet', () => {
    test('getGreet should return Hello Diego', () => {
        const name = 'Diego';
        const message = getGreet(name)
        expect(message).toBe(`Hello ${name}`)
     })
 })