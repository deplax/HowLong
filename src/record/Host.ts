export class Host {
  host: string

  constructor(host: string) {
    this.host = host
  }

  key(): string {
    return this.host
  }
}
