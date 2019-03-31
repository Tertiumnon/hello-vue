<template>
  <div class="addData">
    <h2>Add data</h2>

    <form action="/#/addData" @submit="checkForm" method="post">

      <p>
        <label for="title">Title</label>
        <input name="title" v-model="title">
      </p>
      
      <p>
        <label for="text">Text</label>
        <textarea name="text" v-model="text"></textarea>
      </p>

      <p>
        <input type="submit" value="Add">
      </p>

    </form>
    
  </div>
</template>

<script>
import axios from 'axios';

import Config from '../env/config';

export default {
  name: 'AddData',
  data: function () {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    goBack: function () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/addData')
    },
    checkForm: function (e) {
      e.preventDefault();
      if (this.title && this.text) {
        // console.log('Form is valid');
        this.saveData()
        this.clearForm()
      } else {
        alert('Please fill the form!')
      }
    },
    saveData: function () {
      axios.post(`${Config.server}/data`, {
        title: this.title,
        text: this.text
      }).then(response => {
        // console.log(response)
      });
    },
    clearForm: function () {
      this.title = '';
      this.text = '';
    }
  }
}
</script>

<style scoped>
label {
  display: block;
}
</style>
