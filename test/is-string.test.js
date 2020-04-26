import isString from '../src/is-string'

describe('isString', () => {
	test('works', () => {
		expect(isString('')).toBe(true)
		expect(isString('asd')).toBe(true)
		expect(isString(String('asd'))).toBe(true)
		expect(isString(new String('asd'))).toBe(true)
		expect(isString(2)).toBe(false)
	})
})
