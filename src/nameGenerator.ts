// Copyright © 2025 James Johns - All Rights Reserved
// NameCrafter - Elegant Name Generation

import firstNames from './first-names.json';
import middleNames from './middle-names.json';
import lastNames from './last-names.json';

/**
 * A class that provides methods for generating random names
 */
export class NameGenerator {
    /**
     * Generates a random first name
     * @returns {string} A randomly generated first name
     * @example
     * ```typescript
     * // As a static method
     * import { NameGenerator } from 'namecrafter';
     * const firstName = NameGenerator.randomFirstName(); // e.g. "John"
     *
     * // Or with an instance
     * const generator = new NameGenerator();
     * const firstName = generator.randomFirstName();
     * ```
     */
    public static randomFirstName(): string {
        return firstNames[Math.floor(Math.random() * firstNames.length)];
    }

    /**
     * Generates a random middle name
     * @returns {string} A randomly generated middle name
     * @example
     * ```typescript
     * // As a static method
     * import { NameGenerator } from 'namecrafter';
     * const middleName = NameGenerator.randomMiddleName(); // e.g. "Michael"
     *
     * // Or with an instance
     * const generator = new NameGenerator();
     * const middleName = generator.randomMiddleName();
     * ```
     */
    public static randomMiddleName(): string {
        return middleNames[Math.floor(Math.random() * middleNames.length)];
    }

    /**
     * Generates a random last name
     * @returns {string} A randomly generated last name
     * @example
     * ```typescript
     * // As a static method
     * import { NameGenerator } from 'namecrafter';
     * const lastName = NameGenerator.randomLastName(); // e.g. "Smith"
     *
     * // Or with an instance
     * const generator = new NameGenerator();
     * const lastName = generator.randomLastName();
     * ```
     */
    public static randomLastName(): string {
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    }

    /**
     * Instance method for generating a random first name
     */
    public randomFirstName(): string {
        return NameGenerator.randomFirstName();
    }

    /**
     * Instance method for generating a random middle name
     */
    public randomMiddleName(): string {
        return NameGenerator.randomMiddleName();
    }

    /**
     * Instance method for generating a random last name
     */
    public randomLastName(): string {
        return NameGenerator.randomLastName();
    }

    /**
     * Generates a random full name consisting of a first name, middle name, and last name
     * @returns {string} A randomly generated full name
     * @example
     * ```typescript
     * import { NameGenerator } from 'namecrafter';
     * const generator = new NameGenerator();
     * const name = generator.randomName(); // e.g. "John Michael Smith"
     * ```
     */
    public randomName(): string {
        const randomFirst = this.randomFirstName();
        const randomMiddle = this.randomMiddleName();
        const randomLast = this.randomLastName();

        return `${randomFirst} ${randomMiddle} ${randomLast}`;
    }
}

// Export the class as the default export
export default NameGenerator;

// Export static methods directly for easier access
export const randomFirstName = NameGenerator.randomFirstName;
export const randomMiddleName = NameGenerator.randomMiddleName;
export const randomLastName = NameGenerator.randomLastName;
