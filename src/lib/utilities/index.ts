export function sampleArray<T> (array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function randomNumberBetween (min: number, max: number): number {
  return Math.random() * (max - min) + min
}
