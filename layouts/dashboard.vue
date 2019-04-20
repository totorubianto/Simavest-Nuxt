<template>
  <div>
    <Navbar/>
    <Hero/>
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
                <nuxt-link to="dashboard">
                  <i class="fas fa-th"></i>
                </nuxt-link>
                <nuxt-link to="cardlist">
                  <i class="fas fa-list"></i>
                </nuxt-link>
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
                <b-input  placeholder="Search"></b-input>
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
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/core/Navbar";
import Hero from "~/components/dashboard/hero";
import Card from "~/components/dashboard/card";
export default {
  components: {
    Navbar,
    Hero,
    Card
  }
};
</script>
