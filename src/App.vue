<template>
  <div class="container">
    <app-header></app-header>
    <div class="row stock">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header,
  },
  created() {
      this.$store.dispatch('initStocks')
  }
};
</script>

<style>
body {
    padding: 30px;
}
.stock {
    margin-top: 50px;
}
</style>