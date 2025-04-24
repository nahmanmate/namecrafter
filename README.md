# NameCrafter

A powerful and elegant Node.js package for generating authentic-sounding names. Create realistic first, middle, and last names individually or as full name combinations.

## Installation

```bash
npm install namecrafter
# or
pnpm add namecrafter
# or
yarn add namecrafter
```

## Usage

```typescript
import { randomName, randomFirstName, randomMiddleName, randomLastName } from 'namecrafter';

// Generate a complete random name
const fullName = randomName(); // e.g. "John Michael Smith"

// Generate individual name parts
const firstName = randomFirstName(); // e.g. "John"
const middleName = randomMiddleName(); // e.g. "Michael"
const lastName = randomLastName(); // e.g. "Smith"
```

```javascript
const { randomName, randomFirstName, randomMiddleName, randomLastName } = require('namecrafter');

// Generate a complete random name
const fullName = randomName(); // e.g. "John Michael Smith"

// Generate individual name parts
const firstName = randomFirstName(); // e.g. "John"
const middleName = randomMiddleName(); // e.g. "Michael"
const lastName = randomLastName(); // e.g. "Smith"
```

## Features

- ✨ Generate complete full names or individual name parts
- 🚀 Written in TypeScript with full type support
- 📦 Zero dependencies
- 📚 Large dataset of authentic names
- 🌐 Works in both Node.js and browser environments
- ⚡ Lightning fast and memory efficient

## API

### `randomName()`

Returns a randomly generated full name as a string.

**Returns**: `string` - A space-separated string containing a random first name, middle name, and last name.

### `randomFirstName()`

Returns a randomly generated first name.

**Returns**: `string` - A random first name.

### `randomMiddleName()`

Returns a randomly generated middle name.

**Returns**: `string` - A random middle name.

### `randomLastName()`

Returns a randomly generated last name.

**Returns**: `string` - A random last name.

## License

MIT © James Johns
