export class ChromeLocalStorage {
  private local: any

  constructor() {
    this.local = chrome.storage.local
  }

  save(items: {}): any {
    return new Promise<void>((resolve, reject) => {
      this.local.set(items, () => {
        resolve()
      })
    })
  }

  load(key: string): any {
    // this.local.clear()
    return new Promise((resolve, reject) => {
      this.local.get(key, (item: any) => {
        console.log('item', item)
        resolve(item[key])
      })
    })
  }
}
