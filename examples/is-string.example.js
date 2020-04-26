import isString from '../src/is-string'

isString('')
//=> true

isString('asd')
//=> true

isString(String('asd'))
//=> true

isString(new String('asd'))
//=> true

isString(2)
//=> false
