export default function generateRandomNumber() {
    // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
    // Multiply by 3 to get a number between 0 (inclusive) and 3 (exclusive)
    // Use Math.floor to round down to the nearest integer
    // Add 1 to shift the range to 1 to 3
    return Math.floor(Math.random() * 3) + 1;
}

// Example usage: