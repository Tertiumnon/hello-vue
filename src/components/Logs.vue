<template>
  <div class="logs">
    <h2>Logs</h2>
    
    <table class="table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Event date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.created">
          <td>
            {{ item.type }}
          </td>
          <td>
            {{ new Date(item.created) }}
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
  name: 'Logs',
  data: function () {
    return {
      items: []
    }
  },
  created: function () {
    this.getLog()
  },
  methods: {
    goBack: function () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/logs')
    },
    getLog: function () {
      axios.get(`${Config.server}/log`)
      .then(response => {
        console.log(response)
        this.items = response.data.data
      });
    }
  }
}
</script>

<style scoped>
</style>
