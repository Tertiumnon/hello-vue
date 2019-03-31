<template>
  <div id="app">

    <div class="sidebar">

      <menu>
        <router-link to="/logs" class="btn">
          Logs
        </router-link>

        <router-link to="/data" class="btn">
          Data
        </router-link>

        <router-link to="/addData" class="btn">
          Add data
        </router-link>
      </menu>

    </div>

    <div class="content">
      <router-view />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    items: {
      type: Array,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 10px;
}

.sidebar {
  background-color: #ede9ff;
  padding: 20px;
  height: 100vh;
}

.sidebar menu {
  display: flex;
  flex-direction: column;
  padding-left: 0;
}

.sidebar menu .btn {
  padding: 10px;
  background: #6363ae;
  color: white;
  text-decoration: none;
  margin: 0 10px 10px;
}

.content .table {
  margin: 0 auto;
  border-collapse: collapse;
}

.content .table th, 
.content .table td {
  border: 1px solid grey;
  padding: 10px 20px;
}
</style>
