
export function greet(name: string) {

	return `Hola ${name}`
}

console.log(greet('Paco'))

// INDEX APP UP

import app from './app'
import config from './config'
import './database'


app.listen(config.PORT, () => {
	console.info('>'.repeat(40))
	console.info('         ᓚᘏᗢ The Roost API ')
	console.info(`       IS ALIVE AT PORT: ${config.PORT}`)
	console.info('>'.repeat(40) + '\n')
});
