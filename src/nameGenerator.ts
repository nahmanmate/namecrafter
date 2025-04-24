// Copyright © 2025 James Johns - All Rights Reserved
// NameCrafter - Elegant Name Generation

import firstNames from './first-names.json';
import middleNames from './middle-names.json';
import lastNames from './last-names.json';

/**
 * Generates a random full name consisting of a first name, middle name, and last name
 * @returns {string} A randomly generated full name
 * @example
 * ```typescript
 * import randomName from 'namecrafter';
 *
 * const name = randomName(); // e.g. "John Michael Smith"
 * ```
 */
function randomName(): string {
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomMiddle = middleNames[Math.floor(Math.random() * middleNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirst} ${randomMiddle} ${randomLast}`;
}

export default randomName;
