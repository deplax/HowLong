import {ChromeRecordRepo} from '../repo/ChromeRecordRepo'
import {TabLog} from "./TabLog";
import {Host} from "./Host";

export class RecordSupervisor {
  repo: ChromeRecordRepo
  lastTabLog: TabLog

  constructor(tabLog: TabLog) {
    this.repo = new ChromeRecordRepo()
    this.lastTabLog = tabLog
  }

  async update() {
    if (!this.lastTabLog.isEmpty()) {
      await this.repo.saveTabLog(this.lastTabLog)
    }
    this.lastTabLog = await RecordSupervisor.currentTabLog()
  }

  static async init(): Promise<RecordSupervisor> {
    let tabLog = await this.currentTabLog()
    return new RecordSupervisor(tabLog)
  }

  static async currentTabLog(): Promise<TabLog> {
    let tab = await this.currentTab()
    if (tab === undefined) return TabLog.empty()
    return new TabLog(new Host(new URL(tab.url).host), new Date().getTime(), new Date())
  }

  static currentTab(): Promise<any> {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
        resolve(tabs[0])
      })
    })
  }
}
