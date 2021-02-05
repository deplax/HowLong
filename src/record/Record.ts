import {Host} from "./Host"
import {TabLog} from "./TabLog";


export class Record {
  host: Host
  time: number
  date: Date

  constructor(host: Host, time: number, date: Date) {
    this.host = host
    this.time = time
    this.date = date
  }

  merge(tabLog: TabLog): Record {
    console.log('host', this.host !== tabLog.host)

    if (this.host !== tabLog.host) return this
    console.log('elapsedTime', tabLog.elapsedTime())

    const time = this.time += tabLog.elapsedTime()
    return new Record(this.host, time, this.date)
  }

  isEmpty(): boolean {
    return this.time === 0
  }

  static empty() {
    return new Record(new Host(''), 0, new Date(0))
  }
}
