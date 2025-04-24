const randomName = require('../dist/nameGenerator');

// Test generating multiple names
console.log('Generating 5 random names:');
for (let i = 0; i < 5; i++) {
    console.log(randomName.default());
}

// Test that names are different (randomness check)
const names = new Set();
for (let i = 0; i < 100; i++) {
    names.add(randomName.default());
}
console.log(`\nGenerated ${names.size} unique names out of 100 attempts`);

// Test name format
const name = randomName.default();
const parts = name.split(' ');
console.log('\nName format test:');
console.log('Generated name:', name);
console.log('Has 3 parts:', parts.length === 3);
console.log('All parts are non-empty:', parts.every(part => part.length > 0));
