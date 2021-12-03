<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async mounted() {
    const {data} = await axios.post('http://localhost:3000/api/auth/login/', {
      login: 'ovechkin',
      password: 'jau4maeQuu'
    });
    console.log(data);
  },
}
</script>
