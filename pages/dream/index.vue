<template>
  <div>
    <Hero/>
    <div class="container relative top-300">
      <div class="columns">
        <div class="column is-4">
          <div class="card padding-30 has-text-centered">
            <img src="~/assets/img/icons/dream.png" alt>
            <div class>
              <p class="title is-4 has-text-pink">Tabungan Impian</p>
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
                  <div
                    class="card has-text-centered border-radius height-50 padding-10"
                    :style="{ backgroundImage: 'url(' + require('@/assets/img/home1.jpg') + ')',backgroundSize:'cover ' }"
                  >
                    <div class="flex-end">
                      <span class="fa fa-trash has-text-white"></span>
                    </div>
                    <div class="center">
                      <p class="has-text-white">Pengin Umroh</p>
                    </div>
                  </div>
                </div>
                <div class="column is-3">
                  <div
                    class="card has-text-centered border-radius height-50 padding-10"
                    :style="{ backgroundImage: 'url(' + require('@/assets/img/home1.jpg') + ')',backgroundSize:'cover ' }"
                  >
                    <div class="flex-end">
                      <span class="fa fa-trash has-text-white"></span>
                    </div>
                    <div class="center">
                      <p class="has-text-white">Pengin Umroh</p>
                    </div>
                  </div>
                </div>
                <div class="column is-3">
                  <div
                    class="card has-text-centered border-radius height-50 padding-10"
                    :style="{ backgroundImage: 'url(' + require('@/assets/img/home1.jpg') + ')',backgroundSize:'cover ' }"
                  >
                    <div class="flex-end">
                      <span class="fa fa-trash has-text-white"></span>
                    </div>
                    <div class="center">
                      <p class="has-text-white">Pengin Umroh</p>
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
    <b-modal :active.sync="isCardModalActive" scroll="clip" has-modal-card="false">
      <div class="container">
        <div class="columns is-half is-centered">
          <div class="column is-7">
            <div class="card" style="width:auto;">
              <div class="card-content">
                <h5 class="title is-6 has-text-mystyle">Tambah Impian</h5>
                <div class="field">
                  <div class="file has-name is-boxed is-fullwidth is-medium">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume">
                      <span class="file-cta">
                        <span class="file-icon" style="padding-top:40px;">
                          <i class="fas fa-cloud-upload-alt fa-3x"></i>
                        </span>
                        <span
                          class="file-label has-text-centered padding-top-40"
                        >Drop your files here or click to upload</span>
                      </span>
                      <span class="file-name"></span>
                    </label>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Nama Impian</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Contoh pergi umroh">
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                    <div class="field">
                      <label class="label">Jumlah yang harus di tabung</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="masukan angka">
                      </div>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="field">
                      <label class="label">Masukan nominal per Hari</label>
                      <div class="control">
                        <input class="input" type="text" placeholder="masukan angka">
                      </div>
                      <p class="help">Nominal ini akan di potong perhari sampai menuju target</p>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Estimasi Tercapai</label>
                  <div class="control has-icons-left">
                    <input class="input" type="text" disabled value="2 Tahun">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox">
                      Dengan ini berarti anda telah menyetujui
                      kesepakan yang telah kami buat
                    </label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <nuxt-link
                      class="button is-danger is-fullwidth is-outlined"
                      to="dashboard/:id"
                    >Invest</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
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
      isCardModalActive: false,
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
