export default class Milliseconds {
  value: number

  constructor(ms: number = 0) {
    this.value = ms
  }

  add(ms: number): Milliseconds {
    return new Milliseconds(this.value + ms)
  }

  // return HH:MM:SS.fff
  formatted(): string {
    const fff = String(this.value % 1000).padStart(3, '0')

    const seconds = this.value / 1000
    const [hh, mm, ss] = [
      parseInt(String(seconds / 60 / 60)) % 24,
      parseInt(String(seconds / 60)) % 60,
      parseInt(String(seconds)) % 60,
    ]
      .map((x) => parseInt(String(x)))
      .map((x) => String(x).padStart(2, '0'))

    return `${hh}:${mm}:${ss}.${fff}`
  }
}
