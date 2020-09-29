<template>
  <div
    class="row"
    @scroll="loadMore"
  >
    <div
      v-for="(data,index) in displayData"
      :key="index"
      class="column"
    >
      <div class="card">
        <div
          class="img-container"
          :style="statusColor(data)"
        >
          <div
            class="img-container"
            style="border: 2px solid white;"
          >
            <img
              :src="data.avatar"
              :alt="data.first_name"
              style="border-radius: inherit; width: 100%;"
            />
          </div>
        </div>
        <p style="margin: 5px; font-size: small; font-weight: bold">{{data.status}}</p>
        <h2>{{data.first_name}}</h2>
        <p class="title">{{data.designation}}</p>
        <p>{{data.email}}</p>
      </div>
    </div>
    <div
      v-for="(data,index) in dummyList"
      :key="index"
      class="column"
    >
      <div
        class="card"
        style="min-height: 274px;"
      >
        <div class="gradient img-container">
          <img style="border-radius: inherit; width: 100%;" />
        </div>
        <p
          class="gradient dummy-status"
          style="margin: 5px; font-size: small;"
        ></p>
        <h2 class="gradient dummy-name"></h2>
        <p class="title gradient dummy-deg"></p>
        <p class="gradient dummy-email"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  padding: 10px;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  color: #717171;
  background-color: #c3c3c3;
  text-align: center;
  cursor: pointer;
  margin: 10px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
  height: calc(100vh - 140px);
  overflow: auto;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.container {
  background-color: #f5f5f5;
  margin: auto;
  overflow: scroll;
  -webkit-box-shadow: 0px 1px 32px 4px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 1px 32px 4px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 1px 32px 4px rgba(0, 0, 0, 0.16);
  overflow-y: scroll;
  overflow-x: hidden;
}

.container::-webkit-scrollbar {
  width: 0;
}

.container::-webkit-scrollbar-thumb {
  background-color: #e4e4e4;
}

.container::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

.container::-webkit-scrollbar-corner {
  background-color: #f5f5f5;
  display: none;
}

.dummy-status {
  left: 70px;
  height: 12px;
  width: 65px;
  border-radius: 10px;
}
.dummy-name {
  top: 16px;
  left: 50px;
  height: 20px;
  width: 125px;
  border-radius: 10px;
}
.dummy-deg {
  top: 16px;
  left: 50px;
  height: 20px;
  width: 125px;
  border-radius: 10px;
}
.dummy-email {
  top: 16px;
  left: 24px;
  height: 20px;
  width: 180px;
  border-radius: 10px;
}

.gradient {
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
  background-size: 1000px 640px;

  position: relative;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.img-container {
  box-shadow: 1px 0px 14px 1px var(--status-color);
  border-radius: 50%;
  height: 75px;
  width: 75px;
  margin-left: auto;
  margin-right: auto;
  transition: box-shadow 1s;
}
.search-bar {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>