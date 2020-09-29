<template>
  <div>
    <input
      type="text"
      class="search-bar"
      :placeholder="placeHolder"
      v-model="searchText"
    />
    <i
      :class="['arrow',isOpen ?'up': 'down']"
      @click="openDropDown"
    ></i>
    <div :class="['filter',,isOpen ?'open': 'close']">
      <ul>
        <li
          v-for="(data,index) in filterList"
          :key="index"
          @click="filterSelected(data.value)"
          :class="{'selected':filterType===data.value}"
        >
          <span>{{data.label}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeHolder: {
      type: String,
      default: 'Search...'
    }
  },
  data () {
    return {
      searchText: '',
      filterType: 'all',
      isOpen: false,
      filterList: [
        {
          label: 'All',
          value: 'all'
        },
        {
          label: 'Relationship Manager',
          value: 'relationship-manager'
        },
        {
          label: 'Service Relationship Manager',
          value: 'service-relationship-manager'
        },
        {
          label: 'Client Relationship Manager',
          value: 'client-relationship-manager'
        },
        {
          label: 'BM',
          value: 'bm'
        },
        {
          label: 'Customer Support',
          value: 'customer-support'
        },
        {
          label: 'Investment Advisor',
          value: 'investment-advisor'
        }
      ]
    }
  },
  methods: {
    openDropDown () {
      this.isOpen = !this.isOpen
    },
    filterSelected (val) {
      this.isOpen = !this.isOpen
      this.filterType = val
    }
  }

}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 98%;
  border-radius: 10px;
  height: 40px;
  border: 1px solid #bcc3d1;
  position: relative;
  margin: 10px 0;
  outline: none;
  padding-left: 10px;
}
.arrow {
  border: solid #8b8b8b;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: relative;
  right: 30px;
  bottom: 3px;
  cursor: pointer;
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  bottom: 0px !important;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.filter {
  position: absolute;
  background-color: #fff;
  min-width: 200px;
  right: 25px;
  z-index: 9;
  border: 1px solid #ccc;
  box-shadow: 0 4px 5px #888;
  transform: scaleZ(1);
  margin-top: -10px;
  border-radius: 5px;
  overflow: hidden;
  &.open {
    visibility: visible;
    max-height: 500px;
    transition: all 0.3s ease-in;
  }
  &.close {
    visibility: hidden;
    max-height: 0;
    transition: all 0.3s ease-out;
  }
  ul {
    margin: auto;
    list-style: none;
    padding: inherit;
    li {
      border-left: 5px solid #fff;
      border-right: 5px solid #fff;
      padding: 12px;
      transition: all 0.3s ease-out;
      cursor: pointer;
      &:not(:last-child) {
        border-bottom: 1px solid #ccc;
      }
      &:hover {
        border-left: 5px solid #6c9fda;
      }
      &.selected {
        border-left: 5px solid #0756af;
      }
    }
  }
}
</style>