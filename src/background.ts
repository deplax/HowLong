const {RecordSupervisor} = require('./record/RecordSupervisor')


async function run() {
  const supervisor = await RecordSupervisor.init()
  console.log(supervisor)

  chrome.tabs.onActivated.addListener((activeInfo) => {
    console.log("onActivated")
  })

  chrome.tabs.onUpdated.addListener((activeInfo) => {
    console.log("onUpdated")
  })

  chrome.windows.onFocusChanged.addListener(async (windowId) => {
    await supervisor.update()
    console.log("onFocusChanged")

  })
}

run().then()
