<template>
  <div class="col-sm-12 col-md-12">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data() {
      return {
        stocks:[
          {id: 1, name: 'Google', price: 110},
          {id: 2, name: 'BMW', price: 200},
          {id: 3, name: 'Apple', price: 250},
          {id: 4, name: 'Twitter', price: 80},
        ]
      }
    },
    components:{
      appStock: Stock
    }
  }
</script>
