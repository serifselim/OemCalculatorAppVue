<template>
  <form>
    <div class="card mt-4">
      <div class="form-group row card-body">
        <div class="col-md-6">
          <label>Bileşen Adı</label>
          <input
            v-model="equipment"
            class="form-control"
            type="text"
            placeholder="Bileşen adını belirtiniz"
          />
        </div>
        <div class="col-md-6">
          <label>Fiyatı</label>
          <input
            v-model="price"
            class="form-control"
            type="number"
            placeholder="Fiyatını giriniz"
          />
        </div>
        <button @click.prevent="getValue" class="btn btn-primary mt-3 ml-3">
          Ekle
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      equipment: '',
      price: 0
    };
  },
  methods: {
    getValue() {
      if(this.equipment.length > 0 && this.price > 0) {
        let data = {
          equipment: this.equipment,
          price: this.price
        };
        this.$store.dispatch("setEquipment", data);
      }else{
        alert("Lütfen bilgileri doldurunuz.");
      }
    }
  }
};
</script>
