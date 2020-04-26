import typeOf from '@bemoje/type-of'

/**
 * Returns true if the argument is a string; false otherwise.
 * @param {*} value - The value to evaluate
 * @returns {boolean}
 */
export default function isFunction(value) {
	return typeOf(value) === 'String'
}
