import {Host} from "./Host";
import {Record} from "./Record";

export class TabLog {

  host: Host
  startAt: number
  date: Date

  constructor(host: Host, startAt: number, date: Date) {
    this.host = host
    this.startAt = startAt
    this.date = date
  }

  elapsedTime(): number {
    return (new Date().getTime() - this.startAt) / 1000
  }

  toRecord(): Record {
    return new Record(this.host, this.elapsedTime(), this.date)
  }

  isEmpty(): boolean {
    return this.startAt === 0
  }

  static empty(): TabLog {
    return new TabLog(new Host(''), 0, new Date(0))
  }
}
