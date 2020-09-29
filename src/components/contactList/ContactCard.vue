<template>
  <div class="card">
    <div class="container">
      <div class="img">
        <img
          :src="data.avatar"
          :alt="data.first_name"
          style="border-radius: inherit; width: 100%;"
        />
      </div>
      <div class="details">
        <h4>{{data.first_name}}</h4>
        <span>{{data.email}}</span>
        <span>{{data.status}}</span>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  name: 'ContactCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
}
.container {
  display: flex;
  flex-direction: row;
  .img {
    height: 72px;
    width: 72px;
    border-radius: 50%;
  }
  .details {
    display: grid;
  }
}
</style>