import Vue from 'Vue'
import List from '../src/components/contactList'
let url = 'https://reqres.in/api/users'
let vm = new Vue({
  el: '#contactContainer',
  components: { List },
  template: '<List/>',
  render (h) {
    return h(List, { props: { url } })
  }
})