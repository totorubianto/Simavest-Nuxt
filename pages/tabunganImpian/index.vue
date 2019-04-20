<template>
  <div>
    <Hero/>
    <div class="container relative top-300">
      <div class="columns">
        <div class="column is-4">
          <div class="card padding-30 has-text-centered">
            <img src="~/assets/img/icons/dream.png" alt>
            <div class="">
              <p class="title is-4">Tabungan Impian</p>
              <p class="subtitle is-6">Rencanakan Impianmu Bersama Kami</p>
            </div>
          </div>
        </div>
        <div class="column is-8">
          <div class="card">
            <div class="padding-30">
              <div class="columns">
                <div class="column">
                  <p class="title is-4">Toto Rubianto</p>
                  <p class="is-6">No Rekening : 0989798729998</p>
                </div>
                <div class="column">
                  <label>Saldo</label>
                </div>
              </div>
            </div>

            <div class="padding-left-right-30 background-green">Periode 01/04/2019</div>
            <div class="padding-30">
              <b-table :data="data" :columns="columns"></b-table>
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
