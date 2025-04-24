const { randomName, randomFirstName, randomMiddleName, randomLastName } = require('../dist/nameGenerator');

// Test full name generation
console.log('Testing full name generation:');
console.log('Generating 5 full names:');
for (let i = 0; i < 5; i++) {
    console.log(randomName());
}

// Test individual name parts
console.log('\nTesting individual name parts:');
console.log('5 First Names:');
for (let i = 0; i < 5; i++) {
    console.log(randomFirstName());
}

console.log('\n5 Middle Names:');
for (let i = 0; i < 5; i++) {
    console.log(randomMiddleName());
}

console.log('\n5 Last Names:');
for (let i = 0; i < 5; i++) {
    console.log(randomLastName());
}

// Test uniqueness
const fullNames = new Set();
const firstNames = new Set();
const middleNames = new Set();
const lastNames = new Set();

for (let i = 0; i < 100; i++) {
    fullNames.add(randomName());
    firstNames.add(randomFirstName());
    middleNames.add(randomMiddleName());
    lastNames.add(randomLastName());
}

console.log('\nUniqueness test:');
console.log(`Generated ${fullNames.size} unique full names out of 100 attempts`);
console.log(`Generated ${firstNames.size} unique first names out of 100 attempts`);
console.log(`Generated ${middleNames.size} unique middle names out of 100 attempts`);
console.log(`Generated ${lastNames.size} unique last names out of 100 attempts`);

// Test name format
const name = randomName();
const parts = name.split(' ');
console.log('\nName format test:');
console.log('Generated name:', name);
console.log('Has 3 parts:', parts.length === 3);
console.log('All parts are non-empty:', parts.every(part => part.length > 0));
