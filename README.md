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

There are three ways to use NameCrafter:

### 1. Using Individual Methods (Recommended)

```typescript
import { randomName, randomFirstName, randomMiddleName, randomLastName } from 'namecrafter';

// Generate a complete random name
const fullName = randomName(); // e.g. "John Michael Smith"

// Generate individual name parts
const firstName = randomFirstName(); // e.g. "John"
const middleName = randomMiddleName(); // e.g. "Michael"
const lastName = randomLastName(); // e.g. "Smith"
```

### 2. Using the Default Instance

```typescript
import nameGenerator from 'namecrafter';

// Generate names using the default instance
const fullName = nameGenerator.randomName();
const firstName = nameGenerator.randomFirstName();
const middleName = nameGenerator.randomMiddleName();
const lastName = nameGenerator.randomLastName();
```

### 3. Creating Your Own Instance

```typescript
import { NameGenerator } from 'namecrafter';

// Create a new instance
const generator = new NameGenerator();

// Generate names using your instance
const fullName = generator.randomName();
const firstName = generator.randomFirstName();
const middleName = generator.randomMiddleName();
const lastName = generator.randomLastName();
```

## Features

- ✨ Generate complete full names or individual name parts
- 🚀 Written in TypeScript with full type support
- 📦 Zero dependencies
- 📚 Large dataset of authentic names
- 🌐 Works in both Node.js and browser environments
- ⚡ Lightning fast and memory efficient
- 🔒 Proper encapsulation with class-based architecture

## API

### Class: `NameGenerator`

The main class that provides name generation functionality.

#### `new NameGenerator()`

Creates a new instance of the NameGenerator class.

#### Methods

##### `randomName()`

Returns a randomly generated full name as a string.

**Returns**: `string` - A space-separated string containing a random first name, middle name, and last name.

##### `randomFirstName()`

Returns a randomly generated first name.

**Returns**: `string` - A random first name.

##### `randomMiddleName()`

Returns a randomly generated middle name.

**Returns**: `string` - A random middle name.

##### `randomLastName()`

Returns a randomly generated last name.

**Returns**: `string` - A random last name.

### Exported Functions

For convenience, the default instance's methods are also exported as standalone functions:

- `randomName()`
- `randomFirstName()`
- `randomMiddleName()`
- `randomLastName()`

These functions have the same behavior and return types as their corresponding class methods.

## License

MIT © James Johns
