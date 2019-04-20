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
              <table class="table is-bordered is-responsive is-hoverable">
                <tbody>
                  <tr>
                    <td>
                      <img src="~assets/img/icons/wallet.svg" alt="wallet">
                    </td>
                    <td>
                      <img src="~assets/img/icons/bag.svg" alt="bag">
                    </td>
                    <td>
                      <img src="~assets/img/icons/cart-1.svg" alt="cart1">
                    </td>
                    <td>
                      <img src="~assets/img/icons/cart-2.svg" alt="cart2">
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="~assets/img/icons/credit-card.svg" alt="cc">
                    </td>
                    <td>
                      <img src="~assets/img/icons/delivery-van.svg" alt="d">
                    </td>
                    <td>
                      <img src="~assets/img/icons/gift.svg" alt="gift">
                    </td>
                    <td>
                      <img src="~assets/img/icons/invoice.svg" alt="invoice">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="column is-9">
          <div class="columns is-multiline">
            <div class="column is-4">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="~assets/img/home1.jpg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <h5 class="title is-6">Green Taman Sutra</h5>
                  <p class="is-size-6 is-vertical-center">
                    <span class="padding-right-11">
                      <img src="~assets/img/icons/location.svg" alt="loct">
                    </span>
                    Jakarta Barat, Jl Angsana III
                  </p>
                  <p class="is-size-6">
                    <span class="padding-right-11">
                      <img src="~assets/img/icons/store.svg" alt="store">
                    </span>
                    Rumah
                  </p>
                  <p class="is-size-6">
                    <span class="padding-right-8">
                      <img src="~assets/img/icons/discount.svg" alt="disc">
                    </span>
                    Keuntungan 15%
                  </p>
                  <div class="progress-wrapper padding-top-22">
                    <progress class="progress is-danger is-small" value="90" max="100">90%</progress>
                  </div>
                  <p class="title has-text-grey padding-top-8 is-6">Terkumpul</p>
                  <p class="subtitle is-6">Rp. 50.230.000</p>
                  <div class="control margin-top-22">
                    <input
                      type="submit"
                      class="button is-danger is-fullwidth is-outlined"
                      value="Invest"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
        
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
