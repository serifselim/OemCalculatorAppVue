<template>
    <div class="card mt-3 bg-light">
        <div class="card-body text-right">
          <h6>Toplam Fiyat : <span>{{getTotalPrice}}</span></h6>
          <h6>Dolar : <span>{{getTotalDolar}}</span></h6>
        </div>
      </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed : {
    ...mapGetters(['getTotalPrice','getTotalDolar'])
  }
}
</script>
<style scoped>
  span{
    color:red;
  }
</style>