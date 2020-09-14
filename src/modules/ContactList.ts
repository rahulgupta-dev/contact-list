import Vue from 'vue'
import List from '../components/contactList'
let vueInstance
let contactInstance
class ContactList {
  private url: string
  private el: string
  static getInstance(options) {
    if (contactInstance) {
      return contactInstance
    } else {
      contactInstance = new ContactList(options)
      return contactInstance
    }
  }
  private constructor(options) {
    const { url, el } = options
    this.el = el
    this.url = url
  }
  render() {
    const url = this.url
    vueInstance = new Vue({
      el: `#${this.el}`,
      components: { List },
      template: '<List/>',
      render(h) {
        return h(List, { props: { url } })
      }
    })
  }
  destroy() {
    if (contactInstance && vueInstance && vueInstance.$destroy) {
      vueInstance.$destroy()
      vueInstance = null
      contactInstance = null
    }
  }
}
export default ContactList 