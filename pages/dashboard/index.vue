<template>
  <div>
    <div class="columns is-multiline">
      <div v-for="item in investment" v-bind:key="item.id" class="column is-4">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="require('@/assets/img/'+item.img)" />
            </figure>
          </div>
          <div class="card-content">
            <h5 class="title is-6">{{item.nama}}</h5>
            <p class="is-size-6 is-vertical-center">
              <span class="padding-right-11">
                <img src="~/assets/img/icons/location.svg" alt="loct">
              </span>
              {{item.alamat}}
            </p>
            <p class="is-size-6">
              <span class="padding-right-11">
                <img src="~/assets/img/icons/store.svg" alt="store">
              </span>
              {{item.jenis}}
            </p>
            <p class="is-size-6">
              <span class="padding-right-8">
                <img src="~/assets/img/icons/discount.svg" alt="disc">
              </span>
              Keuntungan 15%
            </p>
            <div class="progress-wrapper padding-top-22">
              <progress class="progress is-danger is-small" :value="item.progres" max="100">90%</progress>
            </div>
            <p class="title has-text-grey padding-top-8 is-6">Terkumpul</p>
            <p class="subtitle is-6">Rp. 50.230.000</p>
            <div class="control margin-top-22">
              <nuxt-link class="button is-danger is-fullwidth is-outlined" v-bind:to="'/dashboard/' + item.id" >Invest</nuxt-link>
              
            </div>
          </div>
        </div>
      </div>

      <!--
            <div class="column is-4">
              <Card/>
            </div>
            <div class="column is-4">
              <Card/>
      </div>-->
    </div>
  </div>
</template>

<script>
import Card from "@/components/dashboard/card";
export default {
  layout: "dashboard",
  data() {
    return {
      
      investment: [
        {
          id: 1,
          nama: "Perumahan Teluk",
          alamat: "Jakarta Barat, Jl Angsana III",
          jenis: "Rumah",
          keuntungan: "Kuntungan 5%",
          progres: 80,
          dana_terkumpul: 45,
          img:"home1.jpg"
        },
        {
           id: 2,
          nama: "Perumahan Sokaraja",
          alamat: "Sokaraja, Jl Angsana III no 90",
          jenis: "Rumah",
          keuntungan: "Kuntungan 5%",
          progres: 45,
          dana_terkumpul: 45,
          img:"home2.jpg"
        },
        {
          id: 3,
          nama: "Kantor Telkom",
          alamat: "Jakarta Selatan, Jl Purwokerto III",
          jenis: "Rumah",
          keuntungan: "Kuntungan 5%",
          progres: 45,
          dana_terkumpul: 45,
          img:"home3.jpeg"
        }
      ]
    };
  },
  components: {
    Card
  }
};
</script>
