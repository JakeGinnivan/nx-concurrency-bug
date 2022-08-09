const [node, file, ...args] = process.argv;
console.log('running', ...args);

if (args[1] === 'apply') {
  await new Promise((resolve) => setTimeout(resolve, 5000));
} else if (args[1] === 'build' || args[1] === 'docker-build') {
  await new Promise((resolve) => setTimeout(resolve, 1000));
} else {
  throw new Error('unknown command');
}
console.log('finished', ...args);
