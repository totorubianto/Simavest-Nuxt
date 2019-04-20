<template>
  <div>
    <Hero/>
    <div class="container relative top-300 padding-bottom-300">
      <div class="columns is-half is-centered">
        <div class="column is-7">
          <div class="card">
            <div class="card-content">
              <h5 class="title is-6 has-text-mystyle">Masukan data diri anda</h5>
              <div class="columns">
                <div class="column is-6">
                  <div class="field">
                    <label class="label">Nama Depan</label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Text input">
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="field">
                    <label class="label">Nama Belakang</label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Text input">
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Masukan Alamat</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input">
                </div>
              </div>
              <div class="field">
                <label class="label">Masukan Nominal Investasi</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="text"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-dollar"></i>
                  </span>
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
  </div>
</template>

<script>
import Hero from "@/components/tabungan/tabunganImpian/hero";
export default {
  components: {
    Hero
  }
};
</script>

<style>
</style>
