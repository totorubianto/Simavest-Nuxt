<template>
  <div>
    <div class="container">
      <!-- begin header content -->
      <div class="columns margin-top-22">
        <div class="column is-12">
          <h4 class="title is-4 has-text-mystyle">Daftar Investasi</h4>
          <div class="columns">
            <div class="column is-11">
              <p class="subtitle is-6 has-text-mystyle">Terdapat lebih dari 3.000 property</p>
            </div>
            <div class="column">
              <div class="is-pulled-right">
                <i class="fas fa-list"></i>
                <i class="fas fa-th"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end header content -->
      <div class="columns">
        <div class="column is-3">
          <div class="card">
            <div class="card-content">
              <h5 class="title is-6">Search</h5>
              <b-field>
                <b-input v-model="name" placeholder="Search"></b-input>
              </b-field>
              <h5 class="title is-6">Kategori</h5>
            </div>
          </div>
        </div>
        <div class="column is-9">
          <div class="columns is-multiline">
            <div class="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <h5 class="title is-6">Perumnas Teluk</h5>
                  <p class="is-size-6 "><i class="fas fa-list padding-right-11"></i>Jl Angsana III</p>
                  <p class="is-size-6 "><i class="fas fa-list padding-right-11"></i>Rumah</p>
                  <p class="is-size-6 "><i class="fas fa-list padding-right-11"></i>Keuntungan</p>
                  <div class="control margin-top-22">
                    <input type="submit" class="button is-danger is-fullwidth" value="Invest">
                  </div>
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
export default {
  layout: "dashboard",
  components: {}
};
</script>
