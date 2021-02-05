import {Host} from "./Host";
import {TabLog} from "./TabLog";
import {Record} from "./Record";

export class Records {
  date: Date
  records: Map<string, Record>


  constructor(date: Date, records: Map<string, Record>) {
    this.date = date
    this.records = records
  }

  find(host: Host): Record {
    return this.getRecord(host) || Record.empty()
  }

  update(tabLog: TabLog): Records {
    const prevRecord = this.find(tabLog.host)
    const updatedRecord = prevRecord.isEmpty() ? tabLog.toRecord() : prevRecord.merge(tabLog)
    this.setRecord(updatedRecord)
    return this
  }

  getRecord(host: Host): Record {
    return <Record>this.records.get(host.key())
  }

  setRecord(record: Record) {
    this.records.set(record.host.key(), record)
  }

  static empty(): Records {
    return new Records(new Date, new Map<string, Record>())

  }
}
