// Copyright © 2025 James Johns - All Rights Reserved
// Random Name Generator

import { NameGenerator } from './nameGenerator';

// Create and export a singleton instance
const nameGenerator = new NameGenerator();

// Export all the methods from the instance
export const {
    randomName,
    randomFirstName,
    randomMiddleName,
    randomLastName
} = nameGenerator;

// Export the class itself for users who want to instantiate their own
export { NameGenerator } from './nameGenerator';

// Export the default instance
export default nameGenerator;
