import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Players } from "./models/Players.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  Players = [
    new Players('Amanda', 'https://media.istockphoto.com/id/458103295/vector/impressed-woman.jpg?s=612x612&w=0&k=20&c=YuVb1tzwBS7uSjaOH3Z10K4zCf3-XeR_uPjpuKpWQGg='),
    new Players('Jeremy', 'https://media.istockphoto.com/id/168857516/vector/jeremy-bentham.jpg?s=2048x2048&w=is&k=20&c=Ft9Zs3fdMh3uE2w6PsATTmHkwa-m8AFzHQQCYlNGW2g='),
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
