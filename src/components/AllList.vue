<template>
    <div class="card mt-3 card">
        <table class="table card-body">
          <tbody>
            <tr v-for="(data,index)  in getOemData" :key="index">
              <td>{{data.equipment}}</td>
              <td>{{data.price}} ₺</td>
              <td class="text-right"><a @click="deleteItem(index)"><i class="far fa-trash-alt fa-lg"></i></a></td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
      oemData : [],
      testData : [],
      changeClass : ''
    }
  },
  methods : {
    deleteItem(index){
      let deleteData = {
        index : index,
        price : this.oemData[index].price
      }
      this.changeClass = 'deleted-item';
      this.$store.dispatch('deleteEquipment',deleteData);
    }
  },
  computed : {
    getOemData(){
      this.oemData = this.$store.getters.getData;
      return this.oemData;
    }
  },

}
</script>
<style>
  .far{
    color : black;
  }
  .far:hover{
    color : red;
  }
  .deleted-item{
    background-color: red;
    color : red;
    transition: 1ms;
  }

</style>