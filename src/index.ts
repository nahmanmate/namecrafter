// Copyright © 2025 James Johns - All Rights Reserved
// Random Name Generator

import { NameGenerator, randomFirstName, randomMiddleName, randomLastName } from './nameGenerator';

// Create and export a singleton instance
const nameGenerator = new NameGenerator();

// Export the randomName method from the instance
export const randomName = nameGenerator.randomName.bind(nameGenerator);

// Export the static methods directly
export { randomFirstName, randomMiddleName, randomLastName };

// Export the class itself for users who want to instantiate their own
export { NameGenerator };

// Export the default instance
export default nameGenerator;
