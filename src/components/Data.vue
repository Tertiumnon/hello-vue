<template>
  <div class="data">
    <h2>Data</h2>

    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.created">
          <td>
            {{ item.title }}
          </td>
          <td>
            {{ item.text }}
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios';

import Config from '../env/config';

export default {
  name: 'Data',
  data: function () {
    return {
      items: []
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    goBack: function () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/data')
    },
    getData: function () {
      axios.get(`${Config.server}/data`)
      .then(response => {
        // console.log(response)
        this.items = response.data.data
      });
    }
  }
}
</script>

<style scoped>
</style>
