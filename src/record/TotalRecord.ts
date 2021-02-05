import {Host} from "./Host";

export class TotalRecord {
  host: Host
  time: number

  constructor(host: Host, time: number) {
    this.host = host
    this.time = time
  }
}

export class TotalRecords {
  totalRecords: Array<TotalRecord>

  constructor(totalRecords: Array<TotalRecord>) {
    this.totalRecords = totalRecords
  }
}
