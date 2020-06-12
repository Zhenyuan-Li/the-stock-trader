<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
<<<<<<< HEAD
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)"
          >{{insufficientQuantity? 'Not enough' : 'Sell'}}</button>
=======
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity"/>
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" 
        :disabled="quantity <= 0 || Number.isInteger(quantity)">Sell</button>
>>>>>>> 61cf6322831060b7d78e26a0688cc1cf8b2919d5
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import {mapActions} from 'vuex';
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock',
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity,
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
=======
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data() {
      return {
          quantity: 0
      }
  },
  methods: {
      ...mapActions({
          placeSellOrder: 'sellStock'
      }
      ),
      sellStock() {
          const order = {
              stockId: this.stock.id,
              stockPrice: this.stock.price,
              quantity: +this.quantity
          }
          this.placeSellOrder(order)
          this.quantity = 0
      }
  }
};
</script>
>>>>>>> 61cf6322831060b7d78e26a0688cc1cf8b2919d5
