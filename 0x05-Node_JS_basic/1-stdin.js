process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const readInput = process.stdin.read();

  if (readInput) {
    process.stdout.write(`Your name is: ${readInput}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
