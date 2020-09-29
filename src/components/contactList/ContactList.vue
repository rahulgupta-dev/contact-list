<template>
  <div class="container">
    <div>
      <search-bar />
    </div>
    <div class="contact-list">
      <contact-card
        v-for="(data,index) in displayData"
        :data="data"
        :key="index"
      ></contact-card>
    </div>
  </div>
</template>

<script> 
import SearchBar from './SearchBar'
import ContactCard from './ContactCard'
export default {
  name: 'ContactList',
  components: {
    SearchBar,
    ContactCard
  },
  props: {
    url: {
      required: true,
      type: String
    }
  },
  mounted () {
    this.loadData()
  },
  data () {
    return {
      list: [],
      dummyList: [1, 2, 3, 4, 7, 8, 9, 10],
      loading: false,
      randomNumber: 1,
      searchKey: ''
    }
  },
  watch: {
    async searchKey (value) {
      if (value && value.length === 3) {
        if (!this.loading) {
          this.loading = true
          this.dummyList = [1, 2, 3, 4, 7, 8, 9]
          this.list = []
          const res = await fetch(`${this.url}`)
          const data = await res.json()
          setTimeout(() => {
            this.list = data.data.filter(d => d.first_name.toLowerCase().match(value.toLowerCase()))
            this.dummyList = []
            this.loading = false
          }, 3000)
        }
      } else {
        this.loadData()
      }
    }
  },
  computed: {
    displayData () {
      return this.list.map((l) => {
        let status = l.status ? 'Offline' : l.status
        status = l.status
        let designation = l.id % 2 === 0 ? 'Relation Manager' : 'Sales Manager'
        if (l.id === this.randomNumber) {
          status = 'Online'
        } else {
          status = l.id % this.randomNumber === 0 ? 'Offline' : 'Busy'
        }
        return {
          ...l,
          status,
          designation
        }
      })
    }
  },
  methods: {
    async loadMore () {
      if (!this.loading) {
        this.loading = true
        this.dummyList = [1, 2, 3, 4, 7, 8, 9]
        const res = await fetch(`${this.url}?page=2`)
        const data = await res.json()
        setTimeout(() => {
          this.list.push(...data.data)
          this.dummyList = []
          this.loading = false
        }, 3000)
      }
    },
    async loadData () {
      const res = await fetch(this.url)
      const data = await res.json()
      this.list = data.data
      this.dummyList = []
      setInterval(() => {
        this.changeStatus()
      }, 3000)
    },
    changeStatus () {
      this.randomNumber = Math.floor(Math
        .random() * (7 - 1 + 1)) + 1
    },
    statusColor (data) {
      let statusColor = '--status-color :  #49ff00'
      if (data.status === 'Offline') {
        statusColor = '--status-color :  #5f5f5f9e'
      } else if (data.status === 'Busy') {
        statusColor = '--status-color : #ff0000d6'
      }
      return statusColor
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
