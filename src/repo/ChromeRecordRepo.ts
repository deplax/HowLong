import {ChromeLocalStorage} from './ChromeLocalRepo';
import {DateUtil} from '../record/DateUtil'
import {TabLog} from "../record/TabLog";
import {Records} from "../record/Records";

export class ChromeRecordRepo {
  storage: ChromeLocalStorage

  constructor() {
    this.storage = new ChromeLocalStorage()
  }

  async saveTabLog(tabLog: TabLog) {
    const records = await this.loadRecords(tabLog.date)
    const updatedRecords = records.update(tabLog)
    await this.saveRecords(updatedRecords)
  }

  async saveRecords(records: Records) {
    const dateKey = DateUtil.toString(records.date)
    const data = {[dateKey]: Object.assign({}, records)}
    records.records

    console.log('saveRecords', data)
    await this.storage.save(data)
  }

  async loadRecords(date: Date): Promise<Records> {
    // Todo : 캐시기능 추가
    const data = await this.storage.load(DateUtil.toString(date))
    console.log('loadRecords', data)
    if (data === undefined || this.isEmptyObject(data)) {
      return Records.empty();
    } else {
      return Records.empty(); //new Records(data.date, data.records)
    }
  }

  async loadTotalRecord() {

  }

  async loadBlocks() {

  }

  isEmptyObject(object: {}): Boolean {
    return Object.keys(object).length === 0 && object.constructor === Object;
  }
}
