import typeOf from '@bemoje/type-of';

/**
 * Returns true if the argument is a string; false otherwise.
 * @param {*} value - The value to evaluate
 * @returns {boolean}
 */
function isFunction(value) {
	return typeOf(value) === 'String'
}

export default isFunction;
