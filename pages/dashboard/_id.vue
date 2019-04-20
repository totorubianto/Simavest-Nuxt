<template>
  <div>
      <Hero/>
    <section>
      <div class="container">
        <div class="columns relative top-100 padding-bottom-300">
          <div class="column is-8 padding-top-100">
            <div class="card">
              <div class="card-content">
                <b-tabs v-model="activeTab"  class="block" expanded>
                  <b-tab-item label="Deskripsi">
                    <p class="is-size-6">
                      Rumah siap huni Kutisari indah selatan Surabaya
                      <br>Dimensi: 9x17
                      <br>Kamar Tidur: 2+1 | Kamar Mandi: 1
                      <br>1 lantai
                      <br>Listrik: 1300watt
                      <br>SHM
                      <br>Hadap utara
                      <br>
                    </p>
                    <h4 class="title is-6 padding-top-24">Selling Point</h4>
                    <p class="is-size-6">
                      -Dekat dengan pusat-pusat pendidikan terkemuka
                      <br>-ke universitas ubaya , 10 menit ke Carolus , TK ,SD ,SMP ,SMA, Petra.
                      <br>-Row jalan lebar (2,5 mobil loss)
                      <br>-One gate system
                      <br>-Jalan paving dan Bebas banjir
                     
                    </p>
                    <h4 class="title is-6 padding-top-24">Prediksi</h4>
                    <p class="is-size-6">
                      Daerah Surabaya selatan sekarang sedang memasuki pengembangan yang mulai dilirik
                      <br>oleh para investor, terbukti dengan dibangunnya banyak proyek-proyek apartemen baik
                      <br>yang kelas menengah maupun yang mewah. Pembangunan infrastruktur jalan juga
                      sedang terus dikerjakan di daerah Surabaya selatan. Kutisari sebagai salah perumahan
                      kelas menengah di Surabaya selatan yang diminati juga pasti akan ikut mengalami
                      kenaikan harga propertinya dikarenakan hal tersebut.
                    </p>
                  </b-tab-item>

                  <b-tab-item label="Detail">
                    <b-collapse class="card" aria-id="contentIdForA11y3" open="false">
                      <div
                        slot="trigger"
                        slot-scope="props"
                        class="card-header"
                        role="button"
                        aria-controls="contentIdForA11y3"
                      >
                        <p class="card-header-title">Pembagian Profit</p>
                        <a class="card-header-icon">
                          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
                        </a>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <p class="is-size-6">
                            Pembagian keuntungan dari mining bitcoin sebesar Rp. Rp. 100.799.
                            Detail dapat dilihat di LOG.
                          </p>
                        </div>
                      </div>
                    </b-collapse>

                    <b-collapse class="card margin-top-22" aria-id="contentIdForA11y3" open="false" >
                      <div
                        slot="trigger"
                        slot-scope="props"
                        class="card-header"
                        role="button"
                        aria-controls="contentIdForA11y3"
                      >
                        <p class="card-header-title">Pembagian Profit</p>
                        <a class="card-header-icon">
                          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
                        </a>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <p class="is-size-6">
                            Pembagian keuntungan dari mining bitcoin sebesar Rp. Rp. 100.799.
                            Detail dapat dilihat di LOG.
                          </p>
                        </div>
                      </div>
                    </b-collapse>
                  </b-tab-item>
                </b-tabs>
              </div>
              <div class="card-footer">
                <p class="card-footer-item">01019191</p>
                <p class="card-footer-item">01019191</p>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <Card/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/dashboard/card";
import Hero from "@/components/dashboard/herodetail";

export default {
  components: {
    Card,Hero
  }
};
</script>

<style>
</style>
