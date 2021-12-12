import { greet } from './index'


describe( 'esto es un test', () => {
	it ('este es el test 1', () => {
		expect(greet('Paco')).toBe('Hola Paco')
	})
	it ('este es el test 2', () => {
		expect(greet('Cholo')).toBe('Hola Cholo')
	})
})
