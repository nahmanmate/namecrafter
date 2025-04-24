// Copyright © 2025 James Johns - All Rights Reserved
// NameCrafter - Elegant Name Generation

import firstNames from './first-names.json';
import middleNames from './middle-names.json';
import lastNames from './last-names.json';

/**
 * Generates a random first name
 * @returns {string} A randomly generated first name
 * @example
 * ```typescript
 * import { randomFirstName } from 'namecrafter';
 * const firstName = randomFirstName(); // e.g. "John"
 * ```
 */
export function randomFirstName(): string {
    return firstNames[Math.floor(Math.random() * firstNames.length)];
}

/**
 * Generates a random middle name
 * @returns {string} A randomly generated middle name
 * @example
 * ```typescript
 * import { randomMiddleName } from 'namecrafter';
 * const middleName = randomMiddleName(); // e.g. "Michael"
 * ```
 */
export function randomMiddleName(): string {
    return middleNames[Math.floor(Math.random() * middleNames.length)];
}

/**
 * Generates a random last name
 * @returns {string} A randomly generated last name
 * @example
 * ```typescript
 * import { randomLastName } from 'namecrafter';
 * const lastName = randomLastName(); // e.g. "Smith"
 * ```
 */
export function randomLastName(): string {
    return lastNames[Math.floor(Math.random() * lastNames.length)];
}

/**
 * Generates a random full name consisting of a first name, middle name, and last name
 * @returns {string} A randomly generated full name
 * @example
 * ```typescript
 * import { randomName } from 'namecrafter';
 * const name = randomName(); // e.g. "John Michael Smith"
 * ```
 */
export function randomName(): string {
    const randomFirst = randomFirstName();
    const randomMiddle = randomMiddleName();
    const randomLast = randomLastName();

    return `${randomFirst} ${randomMiddle} ${randomLast}`;
}

export default randomName;
