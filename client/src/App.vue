<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <button @click="getStats(userInfo)">ДАЙ СТАТУ</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    ...mapActions(['login', 'getStats']),
  },
  async mounted() {
    await this.login({
      login: 'ovechkin',
      password: 'jau4maeQuu'
    });
  },
}
</script>
