<template>
  <div id="app">
    <VHeader :seller="seller" />
  </div>
</template>

<script>
import VHeader from './view/v-header/v-header.vue'
import { getSeller } from './api/index'

export default {
  name: 'App',
  data() {
    return {
      seller: {},
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    async _getSeller() {
      const seller = await getSeller()
      this.seller = { ...this.seller, ...seller }
    },
  },
  components: {
    VHeader,
  },
}
</script>

<style lang="stylus"></style>
