import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    async function init () {
      const node = document.querySelector("#type-text")

      await sleep(1000)
      node.innerText = ""
      await node.type('')

      while (true) {
        await node.type('Victor Guilherme!')
        await sleep(2000)
        await node.delete('Guilherme!')
        await node.type('Full Stack!')
        await sleep(2000)
        await node.delete('Developer!')
      }
    }


    // Source code 🚩

    const sleep = time => new Promise(resolve => setTimeout(resolve, time))

    class TypeAsync extends HTMLSpanElement {
      get typeInterval () {
        const randomMs = 100 * Math.random()
        return randomMs < 50 ? 10 : randomMs
      }

      async type (text) {
        for (let character of text) {
          this.innerText += character
          await sleep(this.typeInterval)
        }
      }

      async delete (text) {
        for (let character of text) {
          this.innerText = this.innerText.slice(0, this.innerText.length -1)
          await sleep(this.typeInterval)
        }
      }
    }

    customElements.define('type-async', TypeAsync, { extends: 'span' })


    init()
  }
}
