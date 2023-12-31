import { createRoot } from 'react-dom/client'
import { _app } from './pages/_app'
import { findOneFile, fromHash, initDB, populateOneFile } from './utilities/db'

let div = document.getElementById('rootdiv') as HTMLDivElement

const root = createRoot(div)
root.render(_app)

window.populateOneFile = populateOneFile
window.findOneFile = findOneFile
window.initDB = initDB
window.fromHash = fromHash