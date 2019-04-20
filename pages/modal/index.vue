<template>
  <div>
    <div class="container">
      <div class="columns is-half is-centered">
        <div class="column is-7">
          <div class="card">
            <div class="card-content">
              <h5 class="title is-6 has-text-mystyle">Tambah Impian</h5>
              <div class="field">
                <div class="file has-name is-boxed is-fullwidth is-medium">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt fa-5x"></i>
                      </span>
                      <span class="file-label has-text-centered padding-top-40" >Drop your files here or click to upload</span>
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
