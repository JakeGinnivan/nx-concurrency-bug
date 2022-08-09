const [node, file, ...args] = process.argv
console.log('running', ...args)

await new Promise(resolve => setTimeout(resolve, 5000))

console.log('finished', ...args)
