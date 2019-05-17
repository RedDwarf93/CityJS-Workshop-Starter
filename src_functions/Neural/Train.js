const brain = require('brain.js/index')
const someData = require('../trainingData/multiLabel')
const fs = require('fs')

const betterData = someData.map(set => {
	return{
		input: set.slice(0, 9),
		output: set.slice(9)
	}
})

const net = new brain.NeuralNetwork();

net.train(betterData);

fs.writeFileSync('trained-net.js', `export default ${net.toFunction().toString()};`
);
console.log('fin')