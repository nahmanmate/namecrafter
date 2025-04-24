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

There are several ways to use NameCrafter, from simplest to most flexible:

### 1. Using Direct Function Imports (Simplest)

```typescript
import { randomFirstName, randomMiddleName, randomLastName, randomName } from 'namecrafter';

// Get string values directly
const firstName = randomFirstName();    // e.g. "John"
const middleName = randomMiddleName();  // e.g. "Michael"
const lastName = randomLastName();      // e.g. "Smith"
const fullName = randomName();          // e.g. "John Michael Smith"
```

### 2. Using Static Methods

```typescript
import { NameGenerator } from 'namecrafter';

// Use static methods directly from the class
const firstName = NameGenerator.randomFirstName();    // e.g. "John"
const middleName = NameGenerator.randomMiddleName();  // e.g. "Michael"
const lastName = NameGenerator.randomLastName();      // e.g. "Smith"
```

### 3. Using the Default Instance

```typescript
import nameGenerator from 'namecrafter';

// Generate names using the default instance
const fullName = nameGenerator.randomName();
const firstName = nameGenerator.randomFirstName();
const middleName = nameGenerator.randomMiddleName();
const lastName = nameGenerator.randomLastName();
```

### 4. Creating Your Own Instance

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
- 🎯 Direct access to string-returning functions
- 🚀 Written in TypeScript with full type support
- 📦 Zero dependencies
- 📚 Large dataset of authentic names
- 🌐 Works in both Node.js and browser environments
- ⚡ Lightning fast and memory efficient
- 🔒 Proper encapsulation with class-based architecture

## API

### Direct Functions

These are the simplest way to get string values:

#### `randomFirstName()`
Returns a random first name as a string.
```typescript
const name = randomFirstName(); // e.g. "John"
```

#### `randomMiddleName()`
Returns a random middle name as a string.
```typescript
const name = randomMiddleName(); // e.g. "Michael"
```

#### `randomLastName()`
Returns a random last name as a string.
```typescript
const name = randomLastName(); // e.g. "Smith"
```

#### `randomName()`
Returns a complete random name as a string.
```typescript
const name = randomName(); // e.g. "John Michael Smith"
```

### Class: `NameGenerator`

The main class that provides name generation functionality.

#### Static Methods

- `NameGenerator.randomFirstName()`
- `NameGenerator.randomMiddleName()`
- `NameGenerator.randomLastName()`

All static methods return strings and can be used without creating an instance.

#### Instance Methods

- `randomFirstName()`
- `randomMiddleName()`
- `randomLastName()`
- `randomName()`

All instance methods return strings and require an instance of the class.

## License

MIT © James Johns
