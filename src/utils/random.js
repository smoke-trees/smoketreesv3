// Return random integer between min and max
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}