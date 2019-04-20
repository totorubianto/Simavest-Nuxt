<template>
  <div>
    <Hero/>
    <div class="container relative top-300 padding-bottom-300">
      <div class="columns">
        <div class="column is-4">
          <div class="card padding-30 has-text-centered">
            <img src="~/assets/img/icons/kebutuhan.svg" alt="icon-saver">
            <div class>
              <p class="title is-4 has-text-pink">Tabungan Kebutuhan</p>
              <p class="subtitle is-6">Rencanakan kebutuhan keuangan anda di sini</p>
            </div>
          </div>
        </div>
        <div class="column is-8">
          <div class="card">
            <div class="padding-30">
              <div class="columns">
                <div class="column">
                  <p class="title is-4">Toto Rubianto</p>
                </div>
                <div class="column is-7">
                  <div class="is-pulled-right">
                    <span>Saldo</span>
                    <h1 class="title is-4 inline">
                      IDR
                      <span class="has-text-green">3.000.000</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="is-6">No Rekening : 0989798729998</p>
                </div>
                <div class="column is-7">
                  <div class="is-pulled-right">
                    <span>Hold Amount</span>
                    <h1 class="title is-4 inline">
                      IDR
                      <span class="has-text-green">0</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div class="padding-left-right-30 background-green">
              <div style="display:inline;padding-right:104px;">Periode 01/04/2019</div>
              <div style="display:inline;">Hingga 02/04/2019</div>
            </div>
            <div class="padding-30">
              <div class="columns is-multiline">
                <div class="column is-3">
                  <div class="card has-text-centered border-radius height-50 padding-10">
                    <div class="flex-end">
                      <span class="fa fa-trash has-text-mystyle"></span>
                    </div>
                    <div class="center">
                      <p class="has-text-mystyle">Pembayaran Spp</p>
                      <p class="has-text-mystyle">10 Ribu/Hari</p>
                    </div>
                  </div>
                </div>
                
                <div class="column is-3">
                  <div class="card has-text-centered border-radius height-50 padding-10">
                    <div class="flex-end">
                      <span class="fa fa-trash has-text-mystyle"></span>
                    </div>
                    <div class="center">
                      <p class="has-text-mystyle">Uang Jajan</p>
                      <p class="has-text-mystyle">30 Ribu/Hari</p>
                    </div>
                  </div>
                </div>

                <div class="column is-3" @click="isCardModalActive = true">
                  <div class="card height-50">
                    <div class="center-100">
                      <span class="fa fa-plus fa-4x has-text-grey-light"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="padding-30">
              <b-table :data="data" :columns="columns"></b-table>
            </div>
            <div class="card-footer">
              <div class="card-footer-item">
                <nuxt-link class="title is-6" v-bind:to="''">Lihat Selengkapnya</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/tabungan/tabunganImpian/hero";
export default {
  components: {
    Hero
  },
  data() {
    return {
      data: [
        {
          tanggal: "2016-10-15",
          transaksi: "Potongan kebutuhan SPP",
          debit: "-",
          credit: "Rp. 10.000"
        },
        {
          tanggal: "2016-10-15",
          transaksi: "Pulsa Rp. 100.000",
          debit: "-",
          credit: "Rp. 100.000"
        },
        {
          tanggal: "2016-10-15",
          transaksi: "Belanja Bulanan",
          debit: "Rp. 200.000",
          credit: "-"
        },
        {
          tanggal: "2016-10-15",
          transaksi: "Buku sekolah",
          debit: "-",
          credit: "Rp. 50.000"
        },
        {
          tanggal: "2016-10-15",
          transaksi: "Bayar Wifi",
          debit: "Rp. 100.000",
          credit: "-"
        }
      ],
      columns: [
        {
          field: "tanggal",
          label: "Tanggal"
        },
        {
          field: "transaksi",
          label: "Transaksi"
        },
        {
          field: "debit",
          label: "Debit"
        },
        {
          field: "credit",
          label: "Credit"
        }
      ]
    };
  }
};
</script>

<style>
.height-50 {
  height: 150px;
}
.border-radius {
  border-radius: 5px;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.padding-10 {
  padding: 10px;
}
.center-100 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.center {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
