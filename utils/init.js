const {deployTracker} = require('./deploy.js')
const {interface,bytecode} = require('./utils/reference.js')
const fs = require('fs-extra')

const TrackerAddresses = JSON.parse(fs.readFileSync('./utils/trackers.json'))

main = () => {
  deployTracker(interface,bytecode).then((address) => {
    TrackerAddresses.push(address)
    json = JSON.stringify(TrackerAddresses)
    fs.writeFile('./utils/trackers.json',json,'utf8',(err,data) => {
      if(err) {
        console.log("Failed to write new tracker to trackers.json")
      }else {
        console.log(`Sucesfully saved new tracker address: ${address}`)
      }
    })
  })
}

main();