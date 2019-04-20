<template>
  <div>
    <Hero/>
    <div class="container relative top-300">
      <div class="columns">
        <div class="column is-4">
          <div class="card padding-30 has-text-centered">
            <img src="~/assets/img/icons/saldo.svg">
            <div class>
              <p class="title is-4 has-text-pink">Saldo Utama</p>
              <p class="subtitle is-6">
                Lihat saldo utama anda dan cek
                histori mutasi
              </p>
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
          transaksi: "Potongan kebutuhan SPP/ Bulan Potongan Kebutuhan Listrik",
          debit: "-",
          credit: "100000"
        },
        {
          tanggal: "2016-10-15",
          transaksi: "Potongan kebutuhan SPP/ Bulan Potongan Kebutuhan Listrik",
          debit: "-",
          credit: "100000"
        },
        {
          tanggal: "2016-10-15",
          transaksi: "Potongan kebutuhan SPP/ Bulan Potongan Kebutuhan Listrik",
          debit: "100000",
          credit: "-"
        },
        {
          tanggal: "2016-10-15",
          transaksi: "Potongan kebutuhan SPP/ Bulan Potongan Kebutuhan Listrik",
          debit: "-",
          credit: "100000"
        },
        {
          tanggal: "2016-10-15",
          transaksi: "Potongan kebutuhan SPP/ Bulan Potongan Kebutuhan Listrik",
          debit: "100000",
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
</style>
