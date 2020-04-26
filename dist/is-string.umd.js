(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/type-of')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/type-of'], factory) :
	(global = global || self, global['is-string'] = factory(global.typeOf));
}(this, (function (typeOf) { 'use strict';

	typeOf = typeOf && Object.prototype.hasOwnProperty.call(typeOf, 'default') ? typeOf['default'] : typeOf;

	/**
	 * Returns true if the argument is a string; false otherwise.
	 * @param {*} value - The value to evaluate
	 * @returns {boolean}
	 */
	function isFunction(value) {
		return typeOf(value) === 'String'
	}

	return isFunction;

})));
